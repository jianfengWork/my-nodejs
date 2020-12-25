/*
  封装操作数据库的通用api
*/
const mysql = require('mysql');

exports.base = (sql, data, callback) => {
  // 创建数据库连接
  const connection = mysql.createConnection({
    host: 'localhost', // 数据库所在的服务器的域名或者IP地址
    user: 'root', // 登录数据库的账号
    password: 'jianfeng', // 登录数据库的密码
    database: 'jianfeng' // 数据库名称
  });

  connection.connect(); // 执行连接操作

  // 操作数据库(数据库操作也是异步的)
  connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    callback(results);
  });

  connection.end(); // 关闭数据库连接
}
