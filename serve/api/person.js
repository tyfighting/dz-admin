const models=require('../db');
const express=require('express');
const router=express.Router();
const mysql=require('mysql');

// 连接数据库
const conn = mysql.createConnection(models.mysql);
conn.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
});
//用户登录验证码生成
router.get('/person',(req,res)=>{
    const selectUser='SELECT * FROM user where mobile=?';
    let check=''+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);  
    res.end(JSON.stringify({
        check:check,
        resp_code:'200',
    })); 
    conn.query(selectUser,[req.query.token], function(err, result) {
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
})
