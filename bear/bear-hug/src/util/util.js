//设置cookie
export function setCookie(name, val, time) {
    //存的名称name,存的值val,存的天数time(过期时间)
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + time);
    document.cookie = name + "=" + val + ";expires=" + oDate; //过期时间           
}
//获取cookie
export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            let c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
};
/*删除cookie*/
export function delCookie(c_name) {
    setCookie(c_name, "", -1)
};