import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import style from './HotHouse.module.less'


export default function HotHouse(props) {
    // 
    const history = useHistory()
    // 跳转到详情页
    function toDetail(id) {
        history.push('/housedetail/'+id)
    }
    return (
        <div className={style['hot-house']}>
            <h3 className={style.title}>热门房源</h3>
            <ul className={style.list}>
                {
                    props.house.map(item => {
                        return (
                            <li className={style.item} key={item.id} onClick={()=>{toDetail(item.id)}}>
                                {/* 1、link  声明式 */}
                                {/* <Link to={'/housedetail/132'}> */}
                                <img src={item.imgUrl} alt="" />
                                <div className={style.info}>
                                    {/* 左侧 */}
                                    <div className={style.desc}>
                                        <div>{item.address}</div>
                                        <div>{item.huxing}</div>
                                    </div>
                                    {/* 右侧 ：类型 */}
                                    <div className={style.type}>
                                        <span>{item.chuzu}</span>
                                        <div>{item.price}元/月</div>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )
}
