const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const server = new Koa();
server.listen(3030);

// 放在 router 之后
// server.use(static('../www', {
//   maxage: 86400 * 1000, // 缓存有效期
//   index: '../www/index.html', // 访问根
// }));

const staticRouter = new Router();
staticRouter.all(/(\.jpg|\.png|\.gif)$/i, static('../www', {
  maxage: 60 * 86400 * 1000
}));
staticRouter.all(/(\.css)$/i, static('../www', {
  maxage: 1 * 86400 * 1000
}));
staticRouter.all(/(\.html|\.htm|\.shtml)$/i, static('../www', {
  maxage: 20 * 86400 * 1000
}));
staticRouter.all('', static('../www', { // * = 其他文件，'' = 根
  maxage: 30 * 86400 * 1000
}));

server.use(staticRouter.routes());
