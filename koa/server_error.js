const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(3030);

// server.use(async (ctx, next) => {
//   try {
//     await next();
//   } catch (e) {
//     ctx.body = 'server 出错';
//   }
// });

const router = new Router();

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e)
    ctx.throw(500, 'router 出错');
  }
});

router.get('/index', async ctx => {
  ctx.body = div.title;
});

server.use(router.routes());
