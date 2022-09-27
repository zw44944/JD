import React from 'react'
import './MyTabs.less'

export default function MyTabs(props) {
    console.log(props);
    // 修改key
    function changeKey(key) {
        // 子组件不能修改父组件的defaultActiveKey，调用父组件的方法修改
        props.onChange(key);
    }

    return (
        <div>
            {/* 预留空间 :具体显示什么内容，由调用他的父组件决定*/}
            {/* {props.children} */}
            {/* 标题展示 */}
            <div className="tab-header">
                {
                    props.children.map(item => {
                        return (
                            <div className={props.defaultActiveKey === item.key ? 'active' : ''} key={item.key} onClick={() => { changeKey(item.key) }} >{item.props.tab}
                            </div>
                        )
                    })
                }
            </div>


            {/* 内容展示 */}
            <div className="tab-content">
                {
                    props.children.map(item => {
                        return (
                            <div key={item.key} className={props.defaultActiveKey === item.key ? 'show' : ''}>
                                {item.props.children}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
