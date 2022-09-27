import React, { useState } from 'react'
// import {connect} from  'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../../components/Input/Input'

import './HomeHeader.less'


export default function HomeHeader(props) {

    const history = useHistory();

    // 去登录
    function goCart() {
        // 判断 用户是否登录？ 登录了，直接去列表页；没有登录，才去登录页
        if (props.user) {
            // 登录了，直接去列表页
            history.push('/cart')
        } else {
            history.push('/login')
        }
    }

    return (
        <div className='home-header'>
            {/* 左侧 */}
            <div className="address">
                <Link to={'/city'} className='city'>
                    {props.city}
                    <i className='iconfont icon-xia'></i>
                </Link>
            </div>

            {/* 中间：搜索 */}
            <div className="search">
                <Input />
            </div>

            {/* 右侧 */}
            <div className="cart">
                {/* 声明式 */}
                {/* <Link to={'/login'}> */}
                <i className='iconfont icon-cart' onClick={goCart}></i>
                {/* </Link> */}
            </div>
        </div>
    )
}


// export default connect(state=>({
//     city:state.city
// }))(HomeHeader)