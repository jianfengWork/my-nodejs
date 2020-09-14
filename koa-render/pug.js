const pug = require('pug');

pug.renderFile('./template/html.pug', {
  pretty: true, // 换行，美化输出
  title: 'pug', // 自定义变量
  users: [
    { name: 'jianfeng', password: '123456' },
    { name: '张三', password: '654321' },
    { name: '李四', password: '555555' },
  ]
}, (err, data) => {
  if (err) {
    console.log('渲染失败');
  } else {
    console.log(data);
  }
});
