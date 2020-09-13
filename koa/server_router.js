const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(3030);

const router = new Router();

// http://localhost:3030/user/index
router.use('/user', require('./routers/user'));

router.get('/news/12345', async (ctx, next) => {
  ctx.body = 'next：';
  
  await next();
});

router.get('/news/:id', async ctx => {
  const { id } = ctx.params; // 取路由参数

  ctx.body ? ctx.body += id : ctx.body = id;
});

router.get('/news/:id/delete', async ctx => {
  const { id } = ctx.params;

  ctx.body = `删除id：${id}`;
});

server.use(router.routes());
