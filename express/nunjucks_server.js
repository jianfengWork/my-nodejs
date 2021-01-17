const express = require('express');
const body = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');

const scoreData = require('./art/scores.json');

const server = express();
server.listen(3030, () => { // 起服务
  console.log('run here http://localhost:3030/query');
});

server.use(body.urlencoded({ // 解析 body
  extended: false,
}));

nunjucks.configure(path.join(__dirname, 'nunjucks'), { // 配置 nunjucks 模版引擎
  autoescape: true,
  express: server,
})

server.get('/query', (req, res, next) => { // 渲染首页
  // 参数一：模板名称；参数二：渲染模板的数据
  res.render('index.html'); // 没有强制规定用 html 结尾
  // res.render('index2.html');
});

server.post('/score', (req, res, next) => {
  const result = scoreData[req.body.code]; // no123
  res.render('result.html', result);
});

server.get('/all', (req, res, next) => { // 全部成绩
  const arr = [];
  for (let key in scoreData) { // 将对象转为数组
    arr.push(scoreData[key]);
  }
  res.render('all.html', {
    list: arr
  });
});
