### 流操作
```
  fs.readFile('www/index.html', (err, buffer) => {
    res.wrtie(buffer);
  });

  1.占用内存
  2.资源使用不均匀
```

### 读写流：压缩、加密

### 启动器：forever
```
  npm i forever -g

  forever start xxx.js   启动
  forever restart xxx.js 重启
  forever stop xxx.js    关闭
  forever stopall        关闭全部
  forever list           查看 serve 列表
```
