/**
 * storage模块
 * 封装storage的获取，存储，删除功能
 */

var storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
        localStorage.removeItem(key)
    }

}
export default storage;