const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
server.listen(3030);

server.context.global = { // 相当于ctx的prototype，通过 ctx.global 访问
  desc: 'koa',
}

const router = new Router();

router.get('/index', async (ctx, next) => {
  console.log(ctx.url)
  // ctx.body = 'ok'
  ctx.body = { // 向浏览器发送东西
    user: 'jianfeng',
    pass: '12345'
  }
});

// server.context
router.get('/global', async (ctx, next) => {
  ctx.body = 'ok：' + ctx.global.desc
});

// http://localhost:3030/throw?user=jianfeng&pass=12345
router.get('/throw', async ctx => {
  const { user, pass } = ctx.query
  if (!pass) ctx.throw(400, 'pass 必填')
  ctx.body = ctx.query
});
router.get('/assert', async ctx => {
  ctx.assert(ctx.query.pass, 400, 'password is required'); // 抛出错误，不执行后面代码
  ctx.body = ctx.query
});

// ctx.state 状态码
router.get('/state', async ctx => {
  ctx.state = 404
});

// ctx.redirect() 重定向地址 302，临时重定向  用在登录
router.get('/redirect', async ctx => {
  ctx.redirect('/index')
  // ctx.redirect('https://www.baidu.com/')
});

// ctx.attachment() 下载文件

server.use(router.routes()); // server 上挂载 router
