# 流操作
```
  fs.readFile('www/index.html', (err, buffer) => {
    res.wrtie(buffer);
  });

  1.占用内存
  2.资源使用不均匀
```

# 读写流：压缩、加密
