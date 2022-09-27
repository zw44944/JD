

import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

export default function LoadMore(props) {
    // 1、定义ref,唯一
    const myRef = useRef()

    // 定义状态  标记
    let [flag, setFlag] = useState(true)

    // 生命周期  页面一渲染载完成
    useEffect(() => {
        // (2)可视窗口的高度
        let clientHeight = document.documentElement.clientHeight;
        // 滚动事件
        window.addEventListener('scroll', srcollFn);
        // 定义滚动事件
        function srcollFn() {
            // (3)滚上去的高度（被浏览器卷去的高度）
            let docHeight = myRef.current.offsetTop;
            // （1）文档高度（dom 元素距离浏览器顶端的距离）offsetTop 只读，只有两种请求会变：1）定位方式变了  2）文档内容增加
            let scrHeight = document.documentElement.scrollTop
            console.log(docHeight, clientHeight, scrHeight);
            //  可视窗口的高度+ 滚上去的高度>= 文档高度  ==>加载更多 已经出来， 页面底端了，加载下一页数据
            console.log(flag);
            if (clientHeight + scrHeight >= docHeight && flag) {
                console.log('加载更多。。。数据');
                // 子组件能修改父组件的页码 +1
                // props.page+1
                // 通知父组件去加载下一页，
                props.getData(props.page);
                // 标记 关了==>没有数据了，别请求了
                setFlag(false)
            }
        }

        return () => {
            // 解绑事件，
            console.log('卸载了..........');
            window.removeEventListener('scroll', srcollFn)
        }


    }, [document.documentElement.scrollTop])



    return (
        // 2、加载给某个dom 元素
        <div ref={myRef}>
            加载更多
        </div>
    )
}
