
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import City from '../pages/City/City'
import Home from '../pages/Home/Home'
import HouseDetail from '../pages/HouseDetail/HouseDetail'
import Layout from '../pages/Layout/Layout'
import Life from '../pages/Life/Life'
import Login from '../pages/Login/Login'
import Mine from '../pages/Mine/Mine'
import Search from '../pages/Search/Search'
import Shop from '../pages/Shop/Shop'

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                {/* 登陆 */}
                <Route path={'/login'} component={Login}></Route>
                {/* 城市选择 */}
                <Route  path={'/city'} component={City}/>
                {/* 搜索---动态路由 */}
                <Route path={'/search/:keyword'} component={Search}/>
                {/* 商品详情 */}
                <Route  path={'/housedetail/:id'} component={HouseDetail}/>
                {/* 购物车列表 */}
                <Route  path={'/cart'} component={Cart}/>
                {/* 布局界面 */}
                <Layout path='/'>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/shop'} component={Shop}/>
                    <Route path={'/life'} component={Life}/>
                    <Route  path={'/mine'} component={Mine}/>
                </Layout>
            </Switch>
        </Router>
    )
}
