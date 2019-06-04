var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
 
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
});
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
// 增加用户接口
router.get('/login', (req, res) => {
    // 输出 JSON 格式
    // console.log(req)
    // console.log(req.query);
    // response = {
    //     first_name:req.query.name,
    //     last_name:req.query.passWord
    // };
    // res.end(JSON.stringify(response));
    // var params = req.body;
    // console.log(1)
    console.log(req, res);
    // var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
    // conn.query(sql, [params.username], function(err, result) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     if (result) {
    //         jsonWrite(res, result);
    //     }
    // })
    var user_name=req.body.name;  
    var password=req.body.passWord;  
    console.log("User name = "+user_name+", password is "+password);  
    res.end("yes"); 
});
// conn.end(err=>{
//     if(err){
//         return;
//     }else{
//         console.log("end")
//         console.log("连接关闭");
//     }
// })
module.exports = router;