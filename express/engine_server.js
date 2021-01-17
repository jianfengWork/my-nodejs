/*
  模板引擎整合：art-template
*/
const express = require('express');
const path = require('path');
const app = express();

// 设置模板的路径
app.set('views', path.resolve(__dirname, 'view'));
// 设置模板引擎
app.set('view engine', 'art'); // app.set('view engine', 'ejs'); 使用配套语法

// 使 express 兼容 art-template 模板引擎
app.engine('art', require('express-art-template'));

app.get('/template', (req, res) => {
  const data = {
    title: '水果',
    list: ['apple', 'orange', 'banana']
  }
  // 参数一：模板名称；参数二：渲染模板的数据
  res.render('template', data);
});

app.listen(3030, () => {
  console.log('running http://localhost:3030/template');
});
