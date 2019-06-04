var express = require('express');
var router = express.Router();

// 配置路由
var user=require('./api/user');


router.use('/api/user',user);

module.exports=router;