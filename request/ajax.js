const http = require('http')
const fs = require('fs')

const allowOrigin = {
  'http://localhost': true,
  'http://aaa.com': true,
  'https://aaa.com': true,
}

http.createServer((req, res) => { // 访问 http://localhost:3030/ajax.html
  console.log(req.url)
  if (req.url === '/ajax.html') {
    fs.readFile('./ajax.html', (err, data) => {
      res.writeHead(200) // 写入状态码
      res.write(data)
      res.end()
    })
  } else if (req.url === '/favicon.ico') {
    res.end()
  } else {
    let { origin } = req.headers // 请求的源网址
    console.log(origin)

    if (allowOrigin[origin]) {
      res.setHeader('access-control-allow-origin', '*')
    }

    res.write('{"a": 12, "b": "Blue"}')
    res.end()
  }

}).listen(3030)
