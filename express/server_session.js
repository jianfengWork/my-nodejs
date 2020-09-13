const express = require('express');
const cookieSession = require('cookie-session');

const server = express();
server.listen(3030);

server.use(cookieSession({
  keys: ['asdfwqw4r4r343fdgsdfg', 'safdas454trgtrthdfthd', 'dfsdfgdfyrt6u6t7yit7u'], // 循环密钥，密钥越多越安全
  maxAge: 20 * 60 * 1000 // session 劫持，缩短有效期，20分钟
}));

server.get('/index', (req, res) => {
  console.log(req.session);

  if (!req.session['user']) {
    req.session['user'] = 1;
  } else {
    req.session['user']++;
  }

  req.session['pass'] = 12345;

  res.send(`欢迎你第${req.session['user']}到访本站，你的密码是：${req.session['pass']}`);
});
