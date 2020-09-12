const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();
server.listen(3030);

server.use(cookieParser(
  'cookieParsercookieParser' // sign
));

server.get('/index', (req, res) => {
  console.log('cookie:', req.cookies); // 未签名的
  console.log('signed:', req.signedCookies); // 签名的

  res.cookie('user', 'jianfeng', {
    // httpOnly: true, // 只能服务器操作，前台看不见
    maxAge: 14 * 86400 * 1000,
    // secure: true, // 只有 https 下进行交互
    signed: true, // 为此 cookie 设置签名
  });

  res.send(`cookie: ${JSON.stringify(req.cookies)} signed: ${JSON.stringify(req.signedCookies)}`);
});
