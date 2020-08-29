const fs = require('fs') // 文件数据，系统自带模块

// fs.watchFile(path, data, callback) 写入文件 路径 数据 回调
// fs.readFile(path, data, callback) 读取文件 路径 回调

fs.writeFile('../www/demo.txt', '13', err => {
  if (err) console.log(err)
})

fs.readFile('../www/demo.txt', (err, data) => {
  if (err) return console.log(err)
  console.log(data)
})
