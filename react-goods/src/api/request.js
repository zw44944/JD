

/**
 * 对axios 进行二次封装
 * （1）配置基础路径和超时间
 * （2）显示进度条（请求拦截）、隐藏进度条（响应拦截）
 * （3）发请求的时候带token， 统一处理错误信息
 * （4）返回二次封装之后的axios
 * 
 */

import Axios from "axios";
// import base from './base'

import qs from 'query-string'
import Nprogress from 'nprogress' //进度条  npm i nprogress  -S
import 'nprogress/nprogress.css' //进度条样式



//1、 创建实例，配置基础路径和超时间
const instance = Axios.create({
    // （1）配置基础路径和超时间
    baseURL: '/foo',
    timeout: 5000
})

//2、 请求拦截
instance.interceptors.request.use(config => {

    // （1）开启进度条
    Nprogress.start();
    // （2）加token,放到请求头
    config.headers.token = '21313123'
    // （3）统一处理 POST请求 参数 qs.
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }


    return config
})


// 3、响应拦截
instance.interceptors.response.use(res => {
    // 成功 200  继续判断
    // 关闭进度条
    Nprogress.done();


    return res.data
}, err => {
    // 失败
    // 关闭进度条
    Nprogress.done();

    // 最后一定要返回Promise的失败
    return Promise.reject(err)
    //成功: Promise.resolve()  reutrn '1'  return false
    //  失败  Promise.reject()
})

// 4、返回二次封装之后的axios
export default instance