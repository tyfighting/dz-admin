const models = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
 
// 连接数据库
const conn = mysql.createConnection(models.mysql);
conn.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
});
//用户登录验证码生成
router.get('/check',(req,res)=>{
    let check=''+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);  
    res.end(JSON.stringify({
        check:check,
        resp_code:'200',
    })); 
})
// 用户登录接口
router.get('/login', (req, res) => {
    // 获取随机数生成用户token
    let timestamp=(new Date().getTime()).toString();
    let randomnum=''+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+timestamp.slice(4);  
    const addMobile = 'insert into user(id, mobile,token) values (0, ?,?)';
    const selectMobile='SELECT * FROM user where mobile=?';
    const updateToken = 'UPDATE user SET token = ?WHERE mobile = ?';
    response = {
        token:randomnum,
        resp_code:'200',
    }; 
    // 如何该号码存在则为登录，否则为注册
    conn.query(selectMobile,[req.query.mobile], function(err, result) {
        if (err)console.log(err);
        if(result.length=='0'){
            conn.query(addMobile, [req.query.mobile,randomnum], function(err, result) {
                if (err)console.log(err);
                if (result) {
                    res.end(JSON.stringify(response)); 
                }
            })
        }else{ 
            conn.query(updateToken, [randomnum,req.query.mobile], function(err, result) {
                if (err)console.log(err);
                if (result) {
                    res.end(JSON.stringify(response)); 
                }
            });
        }
    })    
});
// conn.end();
module.exports = router;