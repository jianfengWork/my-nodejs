const express = require('express');
const multer = require('multer');
const body = require('body-parser');

const server = express();
server.listen(3030);

const obj = multer({ dest: '../post_file/upload' }); // 上传目录
server.use(obj.any()); // 接收任何形式文件

server.use(body.urlencoded({
  extended: false // 是否开启扩展模式
}));

server.post('/file', (req, res) => {
  console.log(req.files, req.body);

  res.send('upload successed');
});
