const http = require('http')
const fs = require('fs')

const tools = {
  bufferSplit: function(buffer, delimiter) {
    let arr = []
    let n = 0
  
    while((n = buffer.indexOf(delimiter)) !== -1) {
      arr.push(buffer.slice(0, n))
      buffer = buffer.slice(n + delimiter.length)
    }
    arr.push(buffer)
  
    return arr
  }
}

// [
//   null,
//   '\r\n字段信息\r\n\r\n内容\r\n',
//   '\r\n字段信息\r\n\r\n内容\r\n',
//   '\r\n字段信息\r\n\r\n内容\r\n',
//   '--'
// ]

http.createServer((req, res) => {
  console.log(req.headers['content-type'])
  let boundary
  if (req.headers['content-type']) {
    boundary = '--' + req.headers['content-type'].split('; ')[1].split('=')[1] // ------WebKitFormBoundary2IHpQ6Aml3OFmnKu
  }
  
  let arr = []
  req.on('data', buffer => {
    arr.push(buffer)
  })
  req.on('end', () => {
    let buffer = Buffer.concat(arr)

    // 按照分隔符切分
    let resAll = tools.bufferSplit(buffer, boundary) // 首尾是null，'--'
    resAll.pop()
    resAll.shift()
    // console.log(resAll.toString())

    // 每一个进行处理
    resAll.forEach(buffer => {
      buffer = buffer.slice(2, buffer.length - 2) // 去除首尾 \r\n

      let n = buffer.indexOf('\r\n\r\n')

      let field = buffer.slice(0, n).toString()
      let data = buffer.slice(n + 4)
      
      if (field.indexOf('\r\n') !== -1) { // 文件会有两行信息，包含 \r\n
        let field2 = field.split('\r\n')[0].split('; ')
        let name = field2[1].split('=')[1]
        let filename = field2[2].split('=')[1]

        name = name.substring(1, name.length - 1)
        filename = filename.substring(1, filename.length - 1)
        // console.log(name, filename)
        if (filename) {
          fs.writeFile(`upload/${filename}`, data, err => {
            if (err) {
              console.log(err)
            } else {
              console.log('上传成功')
            }
          })
        }
        
      } else { // 普通信息
        let name = field.split('; ')[1].split('=')[1]
        name = name.substring(1, name.length - 1) // 去除首尾引号
        // console.log(name, data.toString())
      }

    })
    // res.write('200')
    // res.end()
  })

}).listen(3030)
