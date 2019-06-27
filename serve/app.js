// node 后端服务器
const express = require("express"); 
const fs = require('fs');
const path = require('path');
const bodyParser=require('body-parser');
const app=express();

//跨域cors
app.use(function(req, res, next) { 
  // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Content-Type','text/plain;charset=utf-8');//设置返回值中文编码方式
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 后端api路由开始
// 引入模块
const user=require('./api/user');//路由，后台
const person=require('./api/person');
const index = require('./api/index');
const detail = require('./api/detail');
// 挂载路由到应用
app.use('/api/user', user);
app.use('/api/person', person);
app.use('/api/index', index);
app.use('/api/detail', detail);
// 后端api路由结束

// 监听端口
app.listen(3000,()=>{
  console.log('server is running')
})
