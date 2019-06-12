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
router.get('/restaurant',(req,res)=>{
    let selectUser;
    if(req.query.order=='1'){
        selectUser='SELECT * from restaurant';
    }else if(req.query.order=='2'){
        // 按照距离升序排列
        selectUser='SELECT * from restaurant order by distance';
    }else if(req.query.order=='3'){
        // 按照距离升序排列
        selectUser='SELECT * from restaurant order by distance';
    }
    const selectUser='SELECT mobile FROM user where token=?';    
    conn.query(selectUser,[req.query.token], function(err, result) {
        if (err)console.log(err);
        const mobile=result.length=='0'?'':result[0].mobile;
        res.end(JSON.stringify({
            mobile:mobile,
            resp_code:'200',
        })); 
    })
})
module.exports = router;