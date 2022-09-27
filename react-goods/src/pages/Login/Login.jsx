

import React, { useRef, useState } from 'react'
import './Login.less'
import logo from '../../assets/images/logo.jpg'
import { connect } from 'react-redux';
import { ADD_USER } from '../../store/actions/action-type';
import { setUserAction } from '../../store/actions/actions';


function Login(props) {
  let [user, setUser] = useState('')
  // 1、创建ref
  const myRef = useRef();

  // 登录事件
  function login() {
    // 3、获取值
    let username = myRef.current.value;

    // (1)登录成功，把用户信息存到Redux
    props.setUser(username)
    // (2)持久化到本地
    localStorage.setItem('username', username)
    // (3)页面跳转
    props.history.goBack();

  }

  return (
    <div>
      <div className='login-bg'>
        <img className='login-logo' src={logo} alt="" />
      </div>
      <div className='login-box'>
        <div>
          {/* 受控组件 */}
          {/* <input className='inp' type="text" placeholder='请输入账号' value={user} onChange={(e)=>{setUser(e.target.value)}}/> */}
          {/* 非受控组件  */}
          {/* 2、把ref绑定到指定的DOM元素上去 */}
          <input className='inp' type="text" placeholder='请输入账号' ref={myRef} />
        </div>
        <div>
          <input className='inp' type="text" placeholder='请输入密码' />
        </div>
        <button onClick={login}>登录</button>
      </div>

    </div>
  )
}


export default connect(null, dispatch => {
  return {
    // {type:ADD_USER,payload:username}   
    setUser: (username) => { dispatch(setUserAction(username)) }
  }

})(Login)