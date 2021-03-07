const Koa = require('koa');
const body = require('koa-better-body');

const validate = require('./libs/validator');
const xml = require('./libs/xmlUtils');

const server = new Koa();
server.listen(3030);

server.use(body());

// 服务器通信
server.use(async ctx => {
  const { query } = ctx;
  const method = ctx.method;

  if (method == 'GET' && query.echostr) { // 只有验证 token 才会携带 echostr(随机字符串)

    if (validate(query)) { // 验证是微信服务器
      ctx.body = query.echostr;
    }
    
  } else if (method == 'POST' && query.openid) { // 真实通信

    let data = await xml.parse(ctx.request.body); // 解析 xml
    // data = {
    //   ToUserName: ['open_id'],
    //   MsgId: ['id'],
    //   ...
    // }
    data = xml.normalize(data);
    // data = {
    //   ToUserName: 'open_id',
    //   MsgId: 'id',
    //   ...
    // }

    let {
      ToUserName: to, // 给开发者
      FromUserName: from, // 从用户来
      MsgType: type,
      Content: msg,
      MsgId: id
    } = data; // 取别名

    if (type != 'text') {
      ctx.body = xml.stringify({
        xml: [
          { ToUserName: from },
          { FromUserName: to },
          { CreateTime: Math.floor(new Date().getTime() / 1000) },
          { MsgType: 'text' },
          { Content: '本公众号，目前仅支持文本，请期待' }
        ]
      });
    } else {
      let [n1, n2] = msg.split('+'); // 1 + 2
      ctx.body = xml.stringify({
        xml: [
          { ToUserName: from }, // ToUserName 和 FromUserName 回信时反转
          { FromUserName: to },
          { CreateTime: Math.floor(new Date().getTime() / 1000) },
          { MsgType: 'text' },
          { Content: parseInt(n1) + parseInt(n2) }
        ]
      });
    }
  }

});

// token获取（用于和微信接口通信，例如：自定义菜单）
let access_token = '';
const appid = 'wx13fe27daf13b978f';
const appsecrt = 'bd6c9e417c9910c86823155b5be027a1';
const token_url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecrt}`;

const https = require('https');
const urllib = require('url');

const req = https.request(urllib.parse(token_url), res => {
  // console.log(res.statusCode);
  // console.log(res.headers);

  const arr = [];
  res.on('data', data => {
    arr.push(data);
  });
  res.on('end', () => {
    let buffer = Buffer.concat(arr);
    let json = JSON.parse(buffer.toString());

    access_token = json.access_token;
    console.log('获取到了token：', access_token); //获取后，可存储在数据库(用于校验)
  });
});

req.on('error', err => {
  console.log('获取 access_token 失败', err);
});

req.write('');
req.end();
