import React from 'react'
import { connect } from 'react-redux'
import Swiper from '../../components/Swiper/Swiper'
import HomeHeader from './HomeHeader/HomeHeader'

// import banner1 from '../../assets/images/banner1.png'
// import banner2 from '../../assets/images/banner2.png'
// import banner3 from '../../assets/images/banner3.png'
// import banner4 from '../../assets/images/banner4.png'
// const list = [banner1, banner2, banner3, banner4];

import { useEffect, useState } from 'react'
import { getBanner, getHotHouse } from '../../api'
import './Home.less'
import HotHouse from './HotHouse/HotHouse'



function Home(props) {
  // 定义状态
  let [list, setList] = useState([])
  let [house, setHouse] = useState([])

  // 网页一加载完成，发送网络请求  componentDidMout  DidUpdate
  useEffect(() => {
    // 加载轮播图
    getBanner().then(res => {
      // console.log(res);
      setList(res.banner)
    }).catch(err => {
      console.log(err);
    })

  },[])


  useEffect(() => {
    // 加载热门房源
    LoadHotHouse();

    async function LoadHotHouse() {
      // async await  以同步的语法方式来写异步
      // async 标注下这个方法里有异步 。await 标注下这个方法是异步的
      try {
        const res = await getHotHouse({ city: props.city });
        // console.log(res);
        setHouse(res.list)
      } catch (error) {
        console.log(error);
      }
    }
  }, [props.city])


  return (
    <div>
      {/* 1、头部区域 */}
      <HomeHeader city={props.city} user={props.username}/>
      {/* 2、轮播图 */}
      <Swiper list={list} />

      {/* 3、找舍友 */}
      <div className="navs">
        <div className="item">
          找舍友
        </div>
        <div className="item">
          宜居社区
        </div>
      </div>

      {/* 4、热门房源 */}
      <HotHouse house={house} />

    </div>
  )
}

export default connect(state => ({ city: state.city,username:state.user.username }))(Home)



// async function fun(){
//   const res=await getHotHouse()

// }


