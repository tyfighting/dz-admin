const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/order', 'get', require('../../static/json/order'));
// Mock.mock('/home/banner', 'get', require('./json/homeBanner'));
