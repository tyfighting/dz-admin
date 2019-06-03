var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
 
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
router.get('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(req, res);
    conn.query(sql, [params.username], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
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