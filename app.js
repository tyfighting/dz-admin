const mysql=require("mysql");
const express = require("express");
//解析post请求
const bodyParser=require('body-parser');
const app=express();

//跨域cors
app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 响应路由请求
express.get('/main', (req, res) => {
	var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '123456',
	  database: 'zyq'
	});
	connection.connect();
	connection.query('SELECT * FROM `user`', function (error, results, fields) {
	  if (error) throw error;
	  console.log('The solution is: ', results);

	  res.send(results)
	});
	connection.end();
})
app.listen(3000,()=>{
  console.log('server is running')
})