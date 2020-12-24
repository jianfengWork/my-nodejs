const http = require('http')
const queryString = require('querystring')

let users = {
  1: 2
}
http.createServer((req, res) => {
  // req.method 请求方法
  let path = req.url
  let query = ''
  // post 是分段请求
  let arr = []
  req.on('data', buffer => { // 监听data事件
    arr.push(buffer) // 每段请求数据
  })
  req.on('end', () => {
    let buffer = Buffer.concat(arr) // 使用 Buffer 连接
    query = queryString.parse(buffer.toString())
    complete()
  })
  function complete() {
    console.log(query)
    if (path === '/reg') {
      // console.log(path)
      if (users[query.username]) {
        res.write('400')
        res.end()
      } else {
        users[query.username] = 2
        res.write('200')
        res.end()
      }
      
    } else {
      res.write('404')
      res.end()
    }
  }
}).listen(3030)
