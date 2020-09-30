const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
  console.log(req.url)
  const { pathname } = url.parse(req.url, true)
  if (pathname !== '/favicon.ico') {
    fs.readFile('.' + pathname, (err, buffer) => {
      if (err) {
        res.writeHeader(404)
        res.write('not found')
      } else {
        res.write(buffer)
      }
      res.end()
    })
  }
}).listen(3031)
