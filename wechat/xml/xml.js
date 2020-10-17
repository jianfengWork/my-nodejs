const xml = require('xml');

let xmlstr = xml({ // 我方给微信的，xml，需要生成
  xml: [
    { name: 'jianfeng' },
    { age: 18 }
  ]
});

console.log(xmlstr);
