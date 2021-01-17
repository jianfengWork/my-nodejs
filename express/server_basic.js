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
  return next() // 有错误信息 return 到 server.use('/')
});

server.use('/user', (req, res, next) => { // 什么请求都可接收 get post put delete
  res.send({ msg: '我是 use' })
});

server.use('/', (req, res, next) => { // 什么请求都可接收 拦截错误信息

  console.log('next')
  try { // 无错，接着走
    next()
  } catch (e) { // 有错 抛出错误
    console.log(e)
    res.send({ msg: e })
  }
  
});

// 从上往下执行，放最后
server.use(express.static('../www/')); // 应用级中间件

// 配置访问路径
// app.use('/www', express.static('public'));
{/* <link rel="stylesheet" type="text/css" href="/www/style.css"></link> */ } // 虚拟路径
