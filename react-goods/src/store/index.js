import {createStore,applyMiddleware} from 'redux'
import logger  from 'redux-logger'

// 导入所有的reducer
import allReducers from './reducers';

const store= createStore(allReducers,applyMiddleware(logger))

export default store;