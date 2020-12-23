const express = require('express');

const server = express();
server.listen(3030);

// http://localhost:3030/index?user=summer&pass=12345

server.get('/index', (req, res, next) => {
  console.log(req.url);
  const query  = req.query // get 参数

  req.userinfo = query.user + ': ' + query.pass; // 往下个处理函数传参

  // throw new Error('有错'); // 抛出错误

  next(); // 调用下个请求方法，本质是中间件
});

server.get('/index', (req, res, next) => {
  res.send(req.userinfo);
});

server.use('/user', (req, res, next) => { // 什么请求都可接收 get post put delete
  res.send({ msg: '我是 use' })
});

// 从上往下执行，放最后
server.use(express.static('../www/')); // 应用级中间件
