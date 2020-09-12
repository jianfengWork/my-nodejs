const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();
server.listen(3030);

server.use(cookieParser());

server.get('/index', (req, res) => {
  console.log(req.cookies); // 接收浏览器的 cookie

  res.cookie('user', 'jianfeng', { // 给浏览器发送 cookie
    // domain: 'baidu.com', // 同个网站可以有多个域名，子域名可以访问主域名，主域名不能访问子域名. www.baidu.com 可以访问 baidu.com
    // path: '/', // 可以往上访问，但是不能往下.   /user 可以访问 /；/ 不能访问 /user
    maxAge: 14 * 86400 * 1000, // 过期时间，14天
  });

  res.send(req.cookies);
});