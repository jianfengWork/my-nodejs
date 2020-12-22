const fs = require('fs') // 文件数据，系统自带模块
const path = require('path');

// 带 Sync 是 同步，不带是 异步
// fs.writeFile(path, data, callback) 写入文件 路径 数据 回调
// fs.writeFileSync(path, data, callback) 写入文件 路径 数据 回调
// fs.readFile(path, data, callback) 读取文件 路径 回调

fs.writeFile('../www/demo.txt', '13', err => { // 写入数据并创建文件
  if (err) console.log(err)
})

fs.readFile('../www/demo.txt', (err, data) => {
  if (err) return console.log(err)
  console.log(data)
})

console.log(1);
fs.stat('../www/demo.txt', (err, stat) => {
  // 一般回调函数的第一个参数是错误对象，如果err为null,表示没有错误，否则表示报错了
  if (err) return;
  if (stat.isFile()) {
    console.log('文件');
  } else if (stat.isDirectory()) {
    console.log('目录');
  }
  console.log(stat);
  /*
    stat.atime 文件访问时间
    stat.ctime 文件的状态信息发生变化的时间（比如文件的权限）
    stat.mtime 文件数据发生变化的时间
    stat.birthtime 文件创建的时间
  */
  console.log(2);
});
console.log(3);
// 1, 3, 2

/*
  同步操作
  console.log(1);
  let ret = fs.statSync('../www/demo.txt');
  console.log(ret);
  console.log(2);
  // 1, ret, 2
*/

/*
  文件操作案例（初始化目录结构）
*/
let root = '/Users/jianfeng';
let fileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>welcome to this</div>
</body>
</html>
`;

// 初始化数据
let initData = {
  projectName: 'mydemo',
  data: [{
    name: 'img',
    type: 'dir'
  }, {
    name: 'css',
    type: 'dir'
  }, {
    name: 'js',
    type: 'dir'
  }, {
    name: 'index.html',
    type: 'file'
  }]
}

// 创建项目跟路径
fs.mkdir(path.join(root, initData.projectName), (err) => {
  if (err) return;
  // 创建子目录和文件
  initData.data.forEach((item) => {
    if (item.type == 'dir') {
      // 创建子目录
      fs.mkdirSync(path.join(root, initData.projectName, item.name));
    } else if (item.type == 'file') {
      // 创建文件并写入内容
      fs.writeFileSync(path.join(root, initData.projectName, item.name), fileContent);
    }
  });
});
