import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import style from './Input.module.less'

export default function Input(props) {
    // 
    let [val, setVal] = useState('')
    const history = useHistory();
    // 获取表单输入的值
    // e:111
    // e:事件对象
    function getInput(e) {
        if (e.target) {
            setVal(e.target.value)
        } else {
            // e  就是个参数
            setVal(e)
        }

    }

    // 生命周期一上来 componentDidUpdate
    useEffect(() => {
        // console.log(props);
        // 原因：首页的搜索跟搜索页面的搜索框共用，生命周期一上来，首页的输入框父组件并没有传递val
        if (props.val) {
            // setVal(props.val)  333
            getInput(props.val)
        }

    }, [props])

    // 键盘抬起
    function getKeyUp(e) {
        if (e.keyCode === 13 && val) {
            // 回车
            history.push('/search/' + val)
        }
    }

    return (
        <>
            <input className={style.input} type="text" placeholder='请输入内容' value={val} onChange={getInput} onKeyUp={getKeyUp} />
        </>
    )
}
