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
//店铺排序
router.get('/restaurant',(req,res)=>{
    let selectUser;
    if(req.query.order=='1'){
        selectUser='SELECT * from restaurant';
    }else if(req.query.order=='2'){
        // 按照距离升序排列
        selectUser='SELECT * from restaurant order by distance';
    }else if(req.query.order=='3'){
        // 按照距离升序排列
        selectUser='SELECT * from restaurant order by recent_order_num desc';
    } 
    conn.query(selectUser, function(err, result) {
        if (err)console.log(err);
        res.end(JSON.stringify({
            restaurant:result,
            resp_code:'200',
        })); 
    })
})
router.get('/entries',(req,res)=>{
    select='select * from entries';
    conn.query(select,function(err,result){
        if(err)console.log(err);
        res.end(JSON.stringify({
            entries:result,
            resp_code:'200',
        })); 
    })
})
module.exports = router;