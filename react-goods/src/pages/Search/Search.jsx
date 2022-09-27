import React from 'react'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getSearch } from '../../api';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import Input from '../../components/Input/Input'
import LoadMore from '../../components/LoadMore/LoadMore';
import SearchList from './SearchList/SearchList';

function Search(props) {
    // console.log(props);
    // 定义状态
    let [list, setList] = useState([])
    // 页码
    let [pageNum, setPageNum] = useState(0);

    // 生命周期 一加载完成
    useEffect(() => {

        // 加载第一页数据
        getSearchListByPageNum(0);
    }, [props])

    // 根据页码去查询第几页数据
    async function getSearchListByPageNum(pageNum) {
        try {
            const res = await getSearch({ city: props.city, val: props.match.params.keyword, page: pageNum })
            // 每次加载完，让页码+1
            setPageNum(pageNum + 1);  //

            // setList(res.list)  //直接替换
            //拼接  原来的数据+新请求回来的数据
            setList([...list, ...res.list]);
            //  回调函数 useState(data) 改成：useState(data => 处理data) 
            // setList(list=>[...list,...res.list])
            console.log(list);  //[]

        } catch (error) {
            console.log(error);
        }
    }

    // 父组件发送网络请求，加载下一页数据
    // function getData(){
    //     console.log('搜索列表加载下一页数据....');

    //     getSearchListByPageNum();

    // }


    return (
        <div>
            <CommonHeader>
                <Input val={props.match.params.keyword} />
            </CommonHeader>

            参数：{props.match.params.keyword}
            {/* 搜索列表 */}
            <SearchList list={list} />
            {/* 加载更多  父向子：属性，方法*/}
            <LoadMore page={pageNum} getData={getSearchListByPageNum} />
        </div>
    )
}


export default connect(state => ({ city: state.city }))(Search)
