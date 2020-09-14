const Koa = require('koa');
const ejs = require('koa-ejs');
const path = require('path');

const server = new Koa();
server.listen(3030);

ejs(server, {
  root: path.resolve(__dirname, 'template'), // 文件目录
  layout: false, // 'render'，加一层目录：template/render/html.ejs
  viewExt: 'ejs', // 文件扩展名
  cache: false, // 是否缓存
  debug: false
});

server.use(async ctx => {
  await ctx.render('html', { // 传入参数
    name: 'jianfeng',
    arr: [12, 5, 8, 99, 37]
  })
});
