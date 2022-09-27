/**
 * reducer
 * 方法 执行者 分支判断
 * （1）初始化状态
 * （2）处理状态
 * （3）返回新状态
 */
import { SET_CITY } from "../actions/action-type";

function city(initState='北京',action){
    const {type,payload}=action;
    let newState=initState;
    switch (type) {
        case SET_CITY:
            newState=payload
            return newState;
        default:
            return newState;
    }
}

export default city