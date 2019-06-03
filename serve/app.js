// node 后端服务器
const express = require("express"); 
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
var http= require("http")

//解析post请求
const bodyParser=require('body-parser');
const app=express();

//跨域cors
app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/api/123',function(req,res){
  res.status(200),
  res.json('123')
  res.send("results")
});
// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3000,()=>{
  console.log('server is running')
})
