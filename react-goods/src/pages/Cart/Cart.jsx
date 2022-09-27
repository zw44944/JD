import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCart } from '../../api'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import CartList from './CartList/CartList'
import MyContext from './MyContext'

function Cart(props) {
  // 定义状态
  let [list, setList] = useState([]);

  // 生命周期  网页一加载完成  DidMount
  useEffect(() => {
    // 请求加载购物车列表数据
    async function getCartList() {
      try {
        const res = await getCart({ user: props.user });
        console.log(res);
        setList(res.list)
      } catch (error) {
        console.log(error);
      }
    }
    getCartList();
  }, [])
  //修改iscommit false==>true  评论==》已评论 
  function changeIsCommit(index) {
    list[index].iscommit = true;//手动改
    // 重新渲染页面
    setList(list)
  }


  return (
    <div>
      <CommonHeader>购物车列表</CommonHeader>
      {/* 列表展示 */}
      <MyContext.Provider value={{ changeIsCommit: changeIsCommit }}>
        <CartList list={list} />
      </MyContext.Provider>

    </div>
  )
}

export default connect(state => ({ user: state.user.username }))(Cart)