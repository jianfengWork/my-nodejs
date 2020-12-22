const path = require('path')

const str = '/root/a/b/jianfeng.txt'

console.log(__dirname) // 当前文件相对于系统的位置 绝对路径
console.log(__filename) // 当前文件相对于系统的位置 全路径
console.log(path.dirname(str)) // /root/a/b
console.log(path.extname(str)) // .txt
console.log(path.basename(str)) // jianfeng.txt

console.log(path.join('/root/a', 'b')) // 拼接路径 /root/a/b
console.log(path.resolve('/root/a/b', '../c', 'build', '..', 'strict')) // 解析一堆 路径，返回单一路径

// 两个特殊属性
console.log(path.sep); // 路径分隔符（windows是\ Linux是/）
console.log(path.delimiter); // 环境变量分隔符(windows中使用; linux中使用:)
