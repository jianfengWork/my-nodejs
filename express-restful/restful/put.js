/*
  从服务器主动发送请求调用接口-编辑数据
*/
const http = require('http');
const querystring = require('querystring');

let options = {
  protocol: 'http:',
  hostname: 'localhost',
  port: 3030,
  path: '/editBook',
  method: 'put',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
}

let req = http.request(options, (res) => {
  let info = '';

  res.on('data', (chunk) => {
    info += chunk;
  });
  res.on('end', () => {
    console.log(info);
  });
});

let data = querystring.stringify({
  id: 1,
  name: '三国演义',
  author: '罗贯中',
  category: '文学',
  description: '一个杀伐纷争的年代-1'
});
req.write(data);
req.end();
