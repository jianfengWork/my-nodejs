const http = require('http')
const io = require('socket.io')

// 1.建立普通 http
const server = http.createServer((req, res) => {}).listen(3030)

// 2.建立 ws
let wsServer = io.listen(server)
wsServer.on('connection', sock => {
  //sock.emit('name', 数据)
  //sock.on('name', function (数据){});

  sock.on('count', function(a, b) {
    console.log(a, b, a + b)
  })

  setInterval(function() {
    sock.emit('timer', new Date().getTime())
  }, 1000)
})
