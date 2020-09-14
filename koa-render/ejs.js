const ejs = require('ejs');

// <% include header.ejs -%>
ejs.renderFile('./template/html.ejs', {
  name: 'jianfeng',
  arr: [1, 2, 3]
}, (err, data) => {
  if (err) {
    console.log('错了', err);
  } else {
    console.log(data);
  }
});
