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
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 后端api路由开始
// 引入模块
const user=require('./api/user');//路由，后台
const person=require('./api/person');
// const user = require('./api/user');
// 挂载路由到应用
app.use('/api/user', user);
app.use('/api/person', person);
// app.use({
//   '/api/user': user,
//   '/api/person': person
// })
// 后端api路由结束

// 监听端口
app.listen(3000,()=>{
  console.log('server is running')
})
