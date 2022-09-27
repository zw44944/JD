import React from 'react'
import { useHistory, withRouter } from 'react-router-dom';
import style from './CityHeader.module.less'

export default function CityHeader(props) {
    // 第二种方式：
    const history = useHistory()
    // 返回上一页
    function goBack() {
        // 第一种方式：withRouter
        // props.history.goBack();
        // 第二种方式：
        history.goBack()
    }

    return (
        <div className={style['city-header']}>
            <i className='iconfont icon-back' onClick={goBack}></i>
            <div className={style.title}>城市选择</div>
        </div>
    )
}

// 第一种方式：withRouter
// export default  withRouter(CityHeader)
