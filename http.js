const http = require('http')
const fs = require('fs')

let server = http.createServer((request, response) => { // 请求 request => 请求来的数据，get，post以及参数 response => 返回结果
  // console.log('有请求')
  console.log(request.url) // http://localhost:3030/index.html => /index.html
  if (request.url === '/index.html') {
    fs.readFile('www/index.html', (err, data) => {
      response.writeHead(200) // 写入状态码
      response.write(data)
      response.end()
    })
  } else {
    response.end()
  }
})

// 监听
server.listen(3030)
