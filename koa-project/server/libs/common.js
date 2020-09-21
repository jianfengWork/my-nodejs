const crypto = require('crypto');
const fs = require('fs');

module.exports = {
  md5(buffer) {
    let obj = crypto.createHash('md5');
    obj.update(buffer);

    return obj.digest('hex');
  },
  unlink(path) {
    return new Promise((resolve, reject) => {
      fs.unlink(path, (err) => { // 文件删除
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
};
