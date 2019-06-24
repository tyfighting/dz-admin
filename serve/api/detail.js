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
router.get('/index',(req,res)=>{
    let data={resp_code:'200'}
    let selectUser='SELECT * FROM food a,rfcontact b WHERE a.id=b.food_id AND b.restaurant_id=?'
    conn.query(selectUser,[req.query.restaurant_id], function(err, result) {
        if (err)console.log(err);
        data.food=result;
        let selectUser1='SELECT * FROM restaurant WHERE id=?'
        conn.query(selectUser1,[req.query.restaurant_id], function(err, result) {
            if (err)console.log(err);
            data.restaurant=result;
            res.end(JSON.stringify(data)); 
        })
    })
})
module.exports = router;