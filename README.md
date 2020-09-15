### NODE 库
  #### http
```
  const http = require('http')：起服务
```
  #### fs
```
  const fs = require('fs')：读写文件

  fs.readFile：占用内存、资源使用不均匀
  fs.createReadStream：流操作，压缩、加密
```
  #### await-fs：cnpm i await-fs -D
```
  const fs = require('await-fs')：async 读写文件
```
  #### assert
```
  const assert = require('assert')：断言测试
```
  #### url
```
  const url = require('url')：处理 http:\/\/www.bing.com:8080/a/b/1.html?a=1&a=2&a=3
```
  #### path
```
  const path = require('path')：路径 /a/b/1.html
```
  #### querystring
```
  const querystring = require('querystring')：处理请求参数 username=jianfeng&password=12345
```
  #### zlib
```
  const zlib = require('zlib')：开启 gzip
```
  #### crypto
```
  const crypto = require('crypto')：加密 md5、sha1
```

### 启动器：forever
```
  npm i forever -g

  forever start xxx.js   启动
  forever restart xxx.js 重启
  forever stop xxx.js    关闭
  forever stopall        关闭全部
  forever list           查看 serve 列表
```

### content-type
```
  1.application/x-www-form-urlencoded; charset=UTF-8，普通文本数据
  2.application/json; charset=UTF-8，发送 json 数据
  3.multipart/form-data; 文件 file 二进制数据
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

### 框架：效率高，稳定性高

  #### express
```
  简单，技术落后(Promise, generater)，适合小型应用
    get(url, (req, res, next) => {})
    post(url, (req, res, next) => {})
    use(url, (req, res, next) => {})

  中间件，增加这个框架的功能：
    multer：       处理 file 数据
    body-parser：  处理普通 post 数据
    cookie-parser：不能跨域访问，最大 4K，存在浏览器，请求时会发给服务器，安全性差，使用签名方式相对安全
      1.普通 cookie：req.cookies
      2.sign cookie：req.signedCookies
    cookie-session：存储在服务器，不是独立的，基于cookie
```
  #### KOA
```
  适合大型应用
  v1  generator
  v2  过渡版   generator 和 async
  v3  async/await

  ctx.method： 请求方法
  ctx.url：    url
  ctx.path：   路径部分，不包括域名和 query
  ctx.query：  query 数据
  ctx.ip：     客户端的 IP
  ctx.headers：请求头

  ctx.throw(code, msg)：      报错并退出
  ctx.assert(条件, code, msg)：断言测试

  中间件：
    koa-router：路由管理
      router.get(url, async (ctx, next) => {})
      router.post(url, async (ctx, next) => {})
      router.all(url, async (ctx, next) => {}) 什么请求方法都认可
      1.嵌套路由
        /user
          /company
          /
          /admin
        /news
          /sport
          /woman
        /cart
      2.参数路由：/news/:id/
    koa-static：处理静态文件的访问
    koa-better-body：处理 file 和 post 数据
    koa-session: 操作 session
    koa-ejs：koa 服务端渲染
```
