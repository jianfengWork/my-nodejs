/*
  路由模块
*/
const express = require('express');

const router = express.Router();
const operation = require('./operation.js');

// 渲染主页
router.get('/', operation.showIndex);
// 添加图书(跳转到添加图书的页面)
router.get('/toAddBook', operation.toAddBook);
// 添加图书(提交表单)
router.post('/addBook', operation.addBook);
// 跳转到编辑图书信息页面
router.get('/toEditBook', operation.toEditBook);
// 编辑图书提交表单
router.post('/editBook', operation.editBook);
// 删除图书信息
router.get('/deleteBook', operation.deleteBook);

module.exports = router; // 路由处理
