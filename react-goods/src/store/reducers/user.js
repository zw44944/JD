

import { ADD_USER, DEL_USR } from "../actions/action-type";

/**
 * 登陆信息reduxer  方法  执行者  分支判断
 * (1)初始化状态
 * （2） 修改处理状态
 * （3）返回新状态
 */
function user(initState={token:'',username:''},action){
    let {type,payload}=action;
    let newState={...initState};

    switch (type) {
        case ADD_USER:
            newState.username=payload
            return newState;
        case DEL_USR:
            newState.username=''
            return newState
        default:
            return newState;
    }
}

export default  user