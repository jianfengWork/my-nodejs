const http = require('http')
// const queryString = require('querystring') methods1
const url = require('url')

let server = http.createServer((req, res) => {
  let {pathname, query} = url.parse(req.url, true) // pathname => '/abc',query => {username: 123, password: 111} true 是否处理query
  console.log(pathname, query)
  // let [url, query] = req.url.split('?') methods1
  // let data = queryString.parse(query) // 解析username=132&password=111 => {username: 123, password: 111}
})

server.listen(3030)
