const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'user 的根路由';
});
router.get('/index', async ctx => {
  ctx.body = '用户';
});
router.use('/company', require('./company'));
router.use('/admin', require('./admin'));

module.exports = router.routes();
