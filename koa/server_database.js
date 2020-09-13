const Koa = require('koa');
const mysql = require('mysql');
const co = require('co-mysql');

const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'jianfeng',
  database: 'jianfeng'
});
const db = co(conn);

const server = new Koa();
server.listen(3030);

server.context.db = db

server.use(async ctx => {
  const data = await ctx.db.query('SELECT * FROM user_table');

  ctx.body = data
})
