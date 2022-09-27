import React from 'react'
import FooterNav from '../../components/FooterNav/FooterNav'
import './Layout.less'

export default function Layout(props) {
  return (
    <div>
        {/* 1、预留空间  路由出口 */}
        <div className="content">
            {props.children}
        </div>
        <div></div>
        {/* 2、底部导航 */}
        <div className="footer">
            <FooterNav />
        </div>
    </div>
  )
}
