
import React from 'react'
import { connect } from 'react-redux';
import { delUserAction } from '../../store/actions/actions';
import "./Mine.less";

function Mine(props) {

  // 退出登录
  function exit() {
    // 1、清空redux
    props.delUser();
    // 2、清除本地存储
    localStorage.removeItem('username')
    // 3、跳转页面
    props.history.goBack();
  }

  return (
    <>
      <div className="mine-header">
        <div className="user-img">
          {/* 头像ICON */}
          <i className='iconfont icon-wode'></i>
        </div>
        <i className='iconfont icon-setting' ></i>
      </div>
      <button onClick={exit}>退出登录</button>
    </>
  )
}

export default connect(null, dispatch => ({
  // {type:'del'}
  delUser: () => dispatch(delUserAction())
}))(Mine)