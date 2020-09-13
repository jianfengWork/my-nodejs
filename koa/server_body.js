const Koa = require('koa');
const body = require('koa-better-body');

let server = new Koa();
server.listen(3030);

server.use(body({
  uploadDir: '../post_file/upload'
}));

server.use(async ctx => {
  // 文件和 post 数据
  console.log(ctx.request.fields);

  ctx.body = ctx.request.fields;
});
