import React from 'react'
import { NavLink } from 'react-router-dom'
import './FooterNav.less'

export default function FooterNav() {
    return (
        <div className='footer-nav'>
            <div className="item">
                <NavLink exact to={'/'}>
                    <i className='iconfont icon-home'></i>
                    首页
                </NavLink>
            </div>
            <div className="item">
                <NavLink to={'/shop'}>
                    <i className='iconfont icon-shangcheng'></i>
                    商城
                </NavLink>
            </div>
            <div className="item">
                <NavLink to={'/life'}>
                    <i className='iconfont icon-life'></i>
                    生活
                </NavLink>
            </div>
            <div className="item">
                <NavLink to={'/mine'}>
                    <i className='iconfont icon-wode'></i>
                    我的
                </NavLink>
            </div>
        </div>
    )
}
