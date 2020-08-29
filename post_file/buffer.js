let buffer = new Buffer('abc\r\nddasdfafd\r\ndfaerewtwert')
let buffer2 = new Buffer('\r\n')
console.log('\r\n'.length) // 2

console.log('--', buffer.indexOf(buffer2)) // 查找位置 > 3

function bufferSplit(buffer, delimiter) { // buffer > 数据  delimiter > 分隔符
  let arr = []
  let n = 0

  while((n = buffer.indexOf(delimiter)) !== -1) {
    console.log(n)
    arr.push(buffer.slice(0, n)) // 切分，不包含自己的位置
    buffer = buffer.slice(n + delimiter.length) // 每次重新赋值 buffer
  }
  arr.push(buffer) // 解决最后一个 buffer

  return arr
}

// console.log(bufferSplit(buffer, '\r\n'))
console.log(bufferSplit(buffer, '\r\n').map(b => b.toString()))
