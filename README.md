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

### manager 项目
```
  1.环境变量配置：config > index.js
    1-1.开发环境配置：config > config.dev.js
    2-2.生产环境配置：config > config.prod.js

  2.数据库变量配置：libs > database.js

  3.http模块：libs > http.js
  
  4.路由管理：libs > router.js

  5.处理数据
    5-1.get请求：const { pathname, query } = url.parse(req.url, true);
    5-2.post请求：分为两种
      普通数据：req.on('data', buffer => {} );   req.on('end', () => {} );
      文件数据：multiparty;
```
