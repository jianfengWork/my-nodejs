const path = require('path')

const str = '/root/a/b/jianfeng.txt'

console.log(__dirname) // 当前文件相对于系统的位置 绝对路径
console.log(path.dirname(str)) // /root/a/b
console.log(path.extname(str)) // .txt
console.log(path.basename(str)) // jianfeng.txt

console.log(path.resolve('/root/a/b', '../c', 'build', '..', 'strict')) // 解析一堆 路径，返回单一路径
