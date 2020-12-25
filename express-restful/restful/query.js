/*
  从服务器主动发送请求调用接口-查询数据
*/
const http = require('http');
const path = require('path');
const fs = require('fs');

const options = {
  protocol: 'http:',
  hostname: 'localhost',
  port: 3030,
  path: '/',
}

const req = http.request(options, (res) => {
  let info = '';

  res.on('data', (chunk) => {
    info += chunk;
  });
  res.on('end', () => {
    console.log(info);
    fs.writeFile(path.resolve(__dirname, 'query.html'), info, err => { // 写入数据并创建文件
      if (err) console.log(err)
    })
  });
});

req.end();
