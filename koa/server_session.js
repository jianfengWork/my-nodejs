const Koa = require('koa');
const session = require('koa-session');

let server = new Koa();
server.listen(3030);

server.keys = [
  'asdfasdfasdfasdfasdf',
  'hghjfgjghjkyggfytyurt',
  'hjghjkfguig8ygyi8t78i8',
];
server.use(session({
  // key: '', 对 koa.sess 重命名
  maxAge: 20 * 60 * 1000, // 有效期
  renew: true, // 自动续期
}, server));

server.use(async ctx => {
  if (!ctx.session['user']) {
    ctx.session['user'] = 0;
  }

  ctx.session['user']++;

  ctx.body = `欢迎你第${ctx.session.user}次来访`;
});
