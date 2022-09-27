import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import { connect } from 'react-redux'
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import Swiper from '../../components/Swiper/Swiper';
import './HouseDetail.less'
import { getComment, getHouseInfo } from '../../api';
import CommentInfo from './CommentInfo/CommentInfo';
import LoadMore from '../../components/LoadMore/LoadMore'

function HouseDetail(props) {
    console.log(props);
    // 第二种方式:拿动态路由的参数
    const params = useParams()
    // console.log(params);
    // 定义状态
    let [banner, setBanner] = useState([]);//轮播图
    let [info, setInfo] = useState({});//基本信息
    let [commentList, setCommentList] = useState([]); //评论列表
    // 页码状态
    let [pageNum, setPageNum] = useState(0);
    // 标记收藏
    let [isCollect, setIsCollect] = useState(false)

    useEffect(() => {
        async function getDetail() {
            try {
                const res = await getHouseInfo({ id: params.id })
                console.log(res);
                setBanner(res.banner)
                setInfo(res.info)
            } catch (error) {
                console.log(error);
            }
        }
        // 获取详情
        getDetail();

        getCommentListByPage(0);

    }, [])

    // 根据页码加载第几页数据
    async function getCommentListByPage(pageNum) {
        try {
            const res = await getComment({ id: params.id, page: pageNum })
            console.log(res);
            // 替换
            // setCommentList(res.list)
            // 页码+1
            setPageNum(pageNum + 1);
            // 拼接
            setCommentList([...commentList, ...res.list])
        } catch (error) {
            console.log(error);
        }
    }

    // 父组件去加载第几页数据
    // function getData(page){
    //     getCommentList(page)
    // }

    // 去收藏
    function toCollect() {
        // 判断是否登录
        if (props.username) {
            // 已经登录了  再去发请求，带着用户名，房屋id，去验证该房源有没有被收藏
            // true 已收藏  false 未收藏
            // 网络请求   ===》成功之后
            setIsCollect(!isCollect)
            
        } else {
            // 未登录 --》去登录页
            props.history.push('/login')
        }

    }

    return (
        <div>
            <CommonHeader>详情页</CommonHeader>
            {/* 轮播图 */}
            <Swiper list={banner}></Swiper>
            {/* 选项卡 */}
            {/*  defaultActiveKey="1"  默认选中项  centered居中*/}
            <Tabs defaultActiveKey="1" centered tabBarGutter={100}>
                <Tabs.TabPane tab="房源信息" key="1">
                    <div className="house-info">
                        <div className="house-item">
                            <div>{info.price}元</div>
                            租金
                        </div>
                        <div className="house-item">
                            <div>{info.huxing}</div>
                            户型
                        </div>
                        <div className="house-item">
                            <div>{info.area}</div>
                            面积
                        </div>
                    </div>
                    <div>标题：{info.title}</div>
                    <div>装修：{info.zhuangxiu}</div>
                    <div>楼层：{info.floor}</div>

                </Tabs.TabPane>
                <Tabs.TabPane tab="评论信息" key="2">
                    <CommentInfo list={commentList} />
                    {/* 加载更多 */}
                    <LoadMore page={pageNum} getData={getCommentListByPage} />
                </Tabs.TabPane>
            </Tabs>

            {/* 收藏 */}
            <div className="house-bottom">
                <div className="house-detail">
                    <div onClick={toCollect}>
                        {isCollect ? '已收藏' : '收藏'}
                    </div>
                    <div>购买</div>
                </div>
            </div>

        </div>
    )
}


export default connect(state => {
    return {
        username: state.user.username
    }
})(HouseDetail)