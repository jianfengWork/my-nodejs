const fs = require('fs')

// writeFile 和 readFile 会先写入内存，导致内存不足
// createReadStream 和 createWriteStream，数据流，一部份 一部份 进行处理，大文件操作

// const rs = fs.createReadStream('../www/avatar.png') // 读入流
// const ws = fs.createWriteStream('avatar.copy.png') // 写出流

// rs.pipe(ws) // 管道接入，输入流(磁盘到内存) 和 输出流(内存到磁盘) 连接到一起

// rs.on('error', err => { // 处理错误，防止服务器蹦掉
//   console.log(err)
// })

// ws.on('finish', () => {
//   console.log('完成')
// })

// zlib
const zlib = require('zlib')

const rs = fs.createReadStream('../www/zlib.txt')
const ws = fs.createWriteStream('zlib.txt.gz')
const gz = zlib.createGzip()

rs.pipe(gz).pipe(ws)  // 开启压缩

rs.on('error', err => {
  console.log(err)
})

ws.on('finish', () => {
  console.log('完成')
})
