import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'  //桥梁
import store from './store/index'  //redux 仓库
import AppRouter from './router/AppRouter';
// 初始化样式
import './assets/reset.css'
import { SET_CITY } from './store/actions/action-type';
import { setUserAction } from './store/actions/actions';

// console.log(store.getState());

// 页面一加载，从本地存储里取
let  city=localStorage.getItem('city')
let user=localStorage.getItem('username')
if(city){
    // 存redux
    store.dispatch({type:SET_CITY,payload:city})
}
if(user){
    // 存redux
    store.dispatch(setUserAction(user))
}

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider> 
,document.getElementById('root'));


