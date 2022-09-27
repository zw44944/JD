const express = require('express');
// 创建服务器
const app = express();
// 导入路由
const router = require('./router')

// POST请求接受参数的方式 '属性名=属性值&属性名=属性值'
app.use(express.urlencoded({
    extended: true
}))

app.use('/', router)


app.listen(7878, () => {
    console.log('服务器启动成功了');
    console.log('http://localhost:7878');
})