// sql语句
var sqlMap = {
    // 用户
    // queryAll: 'SELECT * FROM ??',
    user: {
        add: 'insert into user(id, username) values (0, ?)'
    }
}
 
module.exports = sqlMap;