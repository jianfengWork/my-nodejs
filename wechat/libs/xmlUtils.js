const xml2js = require('xml2js');
const xml = require('xml');

module.exports = {
  parse(str) { // 解析微信 xml
    return new Promise((resolve, reject) => {
      xml2js.parseString(str, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.xml);
        }
      });
    });
  },
  stringify(json) { // 生成 xml 数据
    return xml(json);
  },
  normalize(data) { // 数据字段变为对象字段
    for (let name in data) {
      if (data[name].length == 1) {
        data[name] = data[name][0];
      }
    }
    return data;
  }
};
