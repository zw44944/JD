const express = require('express')
const router = require('./router')
const app = express();


app.use('',router)
app.use("/fragment/get",router);
app.use("/fragment/add",router);

app.listen(1234,()=>{
    console.log("服务器已启动,端口号1234");
})