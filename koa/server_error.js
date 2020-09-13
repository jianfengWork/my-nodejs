const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(3030);

server.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.body = 'server 出错';
  }
});

const router = new Router();

router.all('', async ctx => { // * 匹配所有路由
  try {
    await next();
  } catch (e) {
    ctx.body = 'router 出错';
  }
});

router.get('/index', async ctx => {
  ctx.body = div.title;
});

server.use(router.routes());
