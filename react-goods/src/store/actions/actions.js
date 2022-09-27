/**
 * 导出所有的action
 */

import {
    ADD_USER,
    DEL_USR
} from "./action-type"

// {type:ADD_USER,payload:username}   
// export const setUserAction=(payload)=>{
//     return {type:ADD_USER,payload:payload}
// }

/**
 * 导出设置用户名的action
 * @param {*} payload 
 * @returns   {type:ADD_USER,payload:username} 
 */
export const setUserAction = (payload) => ({
    type: ADD_USER,
    payload: payload
})


/**
 * 导出退出登录的actioN
 * @returns 
 */
export const delUserAction = () => ({
    type: DEL_USR
})