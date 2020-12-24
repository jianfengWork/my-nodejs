/*
  业务模块
*/
const path = require('path');
const fs = require('fs');

const data = require('./data.json');

// 自动生成图书编号（自增）
const maxBookCode = () => {
  let arr = [];
  data.forEach((item) => { // 把 id 取出来放进数组
    arr.push(item.id);
  });
  return Math.max.apply(null, arr); // 返回数组最大值
}

// 把内存数据写入文件
const writeDataToFile = (res) => {
  fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2), (err) => { // (4) 格式化数据的时候，前面填充四个空格
    if (err) {
      res.send('server error');
    }
    // 文件写入成功之后重新跳转到主页面
    res.redirect('/');
  });
}

// 渲染主页面
exports.showIndex = (req, res) => {
  res.render('index', { list: data });
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
  book.id = maxBookCode() + 1;
  data.push(book);
  // 把内存中的数据写入文件
  writeDataToFile(res);
}

// 跳转编辑图书页面
exports.toEditBook = (req, res) => {
  let id = req.query.id;
  let book = {};
  data.forEach((item) => {
    if (id == item.id) {
      book = item;
      return;
    }
  });
  res.render('editBook', book);
}

// 编辑图书更新数据
exports.editBook = (req, res) => {
  let info = req.body;
  data.forEach((item) => {
    if (info.id == item.id) {
      for (let key in info) {
        item[key] = info[key];
      }
      return;
    }
  });
  // 把内存中的数据写入文件
  writeDataToFile(res);
}

// 删除图书信息
exports.deleteBook = (req, res) => {
  let id = req.query.id;
  data.forEach((item, index) => {
    if (id == item.id) {
      data.splice(index, 1); // 删除数组的一项数据
    }
    return;
  });
  // 把内存中的数据写入文件
  writeDataToFile(res);
}
