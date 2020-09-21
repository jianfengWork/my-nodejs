### NODE-PROJECT
```
  目录：
    template：服务端渲染-模版
      login.ejs：登录页
      table.ejs：主页

    routers：公共路由
      '/' + 'news' = /news
      '/admin' + '/login' = /admin/login

    static：静态文件
      upload：上传文件-公共

    log：存放输出信息

    upload：上传文件-权限

    libs：通用的库-前台共享
      database.js：数据库
      common.js：封装的方法

    config.js：项目配置

    server.js：主服务
      注意 * 路由

    gen_key.js：生成 key，循环密钥 node gen_key

    admins.json：管理员信息 jianfeng 123456

    md5.js：给 password 加密
```
