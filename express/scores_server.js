const express = require('express');
const body = require('body-parser');
const path = require('path');
const template = require('art-template');

const scoreData = require('./scores.json');

const server = express();
server.listen(3030, () => { // 起服务
  console.log('run here http://localhost:3030/');
});

server.use(body.urlencoded({ // 解析 body
  extended: false,
}));

server.get('/query', (req, res, next) => { // 渲染首页
  const content = template(path.join(__dirname, 'view', 'index.art'), {}); // 使用 art 模版
  res.send(content);
});

server.post('/score', (req, res, next) => {
  const result = scoreData[req.body.code]; // no123
  const content = template(path.join(__dirname, 'view', 'result.art'), result);
  res.send(content);
});

server.get('/all', (req, res, next) => { // 全部成绩
  const arr = [];
  for (let key in scoreData) { // 将对象转为数组
    arr.push(scoreData[key]);
  }
  const content = template(path.join(__dirname, 'view', 'all.art'), {
    list: arr
  });
  res.send(content);
});
