// 合并所有的reducer,并导出
import {combineReducers} from 'redux'
import city from './city'
import user from './user'

// 合并
const allReducers= combineReducers({
  city:city,
  user:user
})

// 导出
export default allReducers