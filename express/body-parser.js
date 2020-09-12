const querystring = require('querystring');

module.exports = {
  urlencoded() {
    return (req, res, next) => {
      const arr = [];
      req.on('data', buffer => {
        arr.push(buffer);
      });
      req.on('end', () => {
        const post = querystring.parse(Buffer.concat(arr).toString());

        req.body = post;
        next();
      });
    };
  }
};
