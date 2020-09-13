const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
  ctx.body = '管理员的根路由';
});
router.get('/index', async ctx => {
  ctx.body = '管理员的index';
});

module.exports = router.routes();
