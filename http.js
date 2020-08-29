const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => { // 请求 req => 请求来的数据，get，post以及参数 res => 返回结果
  // console.log('有请求')
  console.log(req.url) // http://localhost:3030/index.html => /index.html
  if (req.url === '/index.html') {
    fs.readFile('www/index.html', (err, data) => {
      res.writeHead(200) // 写入状态码
      res.write(data)
      res.end()
    })
  } else {
    res.end()
  }
})

// 监听
server.listen(3030)
