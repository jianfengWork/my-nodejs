const express = require('express');
const body = require('body-parser'); // 1.库
// const body = require('./body-parser'); // 3.自己的库


let server = express();
server.listen(3030);

server.use(body.urlencoded({
  extended: false // 是否开启扩展模式
}));

// const querystring = require('querystring');
// server.use((req, res, next) => { // 自己的 fn
//   const arr = [];
//   req.on('data', buffer => {
//     arr.push(buffer);
//   });
//   req.on('end', () => {
//     const post = querystring.parse(Buffer.concat(arr).toString());

//     req.body = post;
//     next();
//   });
// });

server.post('/reg', (req, res) => {
  res.send(req.body)
});
