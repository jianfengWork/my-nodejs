const xml2js = require('xml2js');
const fs = require('fs');

const str = fs.readFileSync('./index.xml').toString(); // 微信给的 xml ，需要解析

xml2js.parseString(str, (err, res) => {
  if (err) {
    console.log('parse error', err);
  } else {
    console.log(res.xml);
  }
});
