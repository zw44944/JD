/**
 * 导出所有的接口请求函数
 */
import base from './base'
// import Axios from 'axios'
// 导入二次封装的axios
import req from './request'


/**
 * 获取轮播图
 */
export const getBanner = () => {
    return req.get(base.banner)
}


/**
 * 获取热门房源
 * @param {*} params   {city:'xxx'}
 * @returns 
 * get 传参方式：
 * 1、字符串拼接  xxx?city='xx'
 * 2、params 传参    params:{city:'xx',id:''}
 */
// export const getHotHouse=(params)=>req.get(base.hotHouse,{params:params})
export const getHotHouse = (params) => req.get(base.hotHouse, {
    params
})

/**
 * 获取城市列表
 * @returns 
 */
export const getCitys=()=>req.get(base.citys)

/**
 * * 搜索房源接口
 * @param {*} params 
 * @returns 
 * params: 当前城市、搜索关键字、请求页码
 * city：城市
 * val：搜索关键词
 * page:页码
 * http://localhost:8888/search?city=北京&val=123 &page=
 * {city:'',val:'',page:0}
 */
export const getSearch=(params)=>req.get(base.search,{params})


/**
 * 根据房屋id，去查询指定的详情信息
 */
export const getHouseInfo=(params)=>req.get(base.houseInfo,{params})


/**
 * 获取评论信息
 * @param {*} params  {id:xxx,page:xxx}
 * id:房屋id
 * page:第几页
 * @returns 
 */
export const getComment=(params)=>req.get(base.comment,{params})


/**
 * 获取购物车列表
 *  {user:'xxx'}
 */
export const getCart=(params)=>req.get(base.cart,{params})