/*
  业务模块
  使用 路径参数
*/
const db = require('./db.js');

// 渲染主页面
exports.showIndex = (req, res) => {
  const sql = 'select * from book';
  db.base(sql, null, (result) => { // 获取数据
    res.render('index', { list: result });
  });
}

// 跳转到添加图书的页面
exports.toAddBook = (req, res) => {
  res.render('addBook', {});
}

// 添加图书保存数据
exports.addBook = (req, res) => {
  let info = req.body; // 获取表单数据
  let book = {};
  for (let key in info) {
    book[key] = info[key];
  }

  const sql = 'insert into book set ?';
  console.log(book)
  db.base(sql, book, (result) => { // 将数据写入数据库
    if (result.affectedRows == 1) {
      res.redirect('/');
    }
  });
}

// 跳转编辑图书页面
exports.toEditBook = (req, res) => {
  let id = req.params.id;

  const sql = 'select * from book where id=?';
  const data = [id];
  db.base(sql, data, (result) => {
    res.render('editBook', result[0]);
  });
}

// 编辑图书更新数据
exports.editBook = (req, res) => {
  let info = req.body;

  const sql = 'update book set name=?,author=?,category=?,description=? where id=?';
  const data = [info.name, info.author, info.category, info.description, info.id];
  db.base(sql, data, (result) => {
    if (result.affectedRows == 1) {
      res.redirect('/');
    }
  });
}

// 删除图书信息
exports.deleteBook = (req, res) => {
  let id = req.params.id;

  const sql = 'delete from book where id=?';
  const data = [id];
  db.base(sql, data, (result) => {
    if (result.affectedRows == 1) {
      res.redirect('/');
    }
  });
}
