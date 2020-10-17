const crypto = require('crypto');

const token = '7CwvplxmBgce3pEtbSQ5j0meC77V4IYl';

// 我方服务器验证微信服务器身份
module.exports = function (query) {
  let { signature, timestamp, nonce } = query;

  let arr = [token, timestamp, nonce]; // 1. 放到数组
  arr.sort(); // 2.字典排序

  let hash = crypto.createHash('sha1'); // 3. 进行 sha1 验证
  hash.update(arr.join(''));

  let newSignature = hash.digest('hex'); // 16进制

  return newSignature == signature;
};
