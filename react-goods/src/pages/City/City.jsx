import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import CityHeader from './CityHeader/CityHeader'
import './City.less'
import { getCitys } from '../../api'
import { SET_CITY } from '../../store/actions/action-type'
import CommonHeader from '../../components/CommonHeader/CommonHeader'

function City(props) {

  // 定义状态
  let [hotCity, setHotCity] = useState([]);


  // 生命周期  ==>DidMount
  useEffect(() => {

    async function getHotCity() {
      try {
        const res = await getCitys();
        console.log(res.data.indexCitys.hot);
        setHotCity(res.data.indexCitys.hot)
      } catch (error) {
        console.log(error);
      }
    }
    // 获取热门城市
    getHotCity();


  }, [])


  // 点击某个热门城市
  function selectCity(name) {
    // 存redux
    props.setCity(name)
    // 持久化到本地
    localStorage.setItem('city', name)
    // 页面跳转
    props.history.push('/')
  }

  return (
    <div>
      {/* <CityHeader /> */}

      {/* 公共头部组件 */}
      <CommonHeader >城市选择</CommonHeader>

      {/* 当前城市 */}
      <div className="city-box">
        <div className="city-title">
          当前城市
        </div>
        <div className="city-name">
          {props.city}
        </div>
      </div>
      {/* 热门城市 */}
      <div className="city-box">
        <div className="city-title">
          热门城市
        </div>
        {
          hotCity.map(item => {
            return (
              <div className="city-name" key={item.id} onClick={() => { selectCity(item.name) }}>
                {item.name}
              </div>
            )
          })
        }


      </div>
    </div>
  )
}


// 高阶组件 ：增强功能
// 参数：回调函数
// 1、state 读取仓库里所有状态
// 2、dispatch 仓库里d的dispatch方法
export default connect(state => {

  return {
    city: state.city
  }
}, dispatch => {
  return {
    // 修改state  dispatch({type:'',payload:''})
    setCity: (payload) => { dispatch({ type: SET_CITY, payload: payload }) }
  }
})(City)