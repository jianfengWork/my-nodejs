const Koa = require('koa');

const server = new Koa();
server.listen(3030);

server.keys = [
  'sdfasdfasdfsadfasddfsdaf',
  'gutryurtyhfddyt8uytug',
  'tyutryur687tyuyujghjkhj',
];
server.use(async ctx => {
  ctx.cookies.set('user', 'jianfeng', {
    signed: true,
    maxAge: 14 * 86400 * 1000,
  });

  // console.log(ctx.cookies.get('user', { signed: true }));
  ctx.body = ctx.cookies.get('user', { signed: true })
});
