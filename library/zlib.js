const http = require('http')
const zlib = require('zlib')
const url = require('url')
const fs = require('fs')

// 普通数据
// http.createServer((req, res) => { // req res 本身就是流
//   let { pathname } = url.parse(req.url, true)
//   let filepath = '../www' + pathname

//   let rs = fs.createReadStream(filepath)
//   rs.on('error', err => {
//     res.writeHeader(404)
//     res.write('not found')
//     res.end()
//   })
//   rs.pipe(res)

// }).listen(3030)

// gzip
http.createServer((req, res) => {
  let { pathname } = url.parse(req.url, true)
  let filepath = '../www' + pathname

  fs.stat(filepath, (err, stat) => { // 确认是否有该文件
    console.log(err)
    if (err) {
      // res.setHeader('content-encoding', 'deflate') 普通的二进制流
      res.writeHeader(404)
      res.write('not found')
      res.end()
    } else {
      let rs = fs.createReadStream(filepath)
      rs.on('error', err => { })
      res.setHeader('content-encoding', 'gzip') // 开启 gzip 流
      let gz = zlib.createGzip()
      rs.pipe(gz).pipe(res) // 解压浏览器负责
    }
  })
}).listen(3030)
