const express = require('express');
const app = express();
const router = require('./router')

app.use('/',router);


app.listen(10086,()=>{
    console.log('服务器已启动,端口号10086');
})