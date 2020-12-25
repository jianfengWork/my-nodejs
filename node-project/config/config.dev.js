const path = require('path');

module.exports = {
  // database
  DB_HOST: 'localhost',
  DB_PORT: 3306,
  DB_USER: 'root',
  DB_PASS: 'jianfeng',
  DB_NAME: 'jianfeng',
  // http
  HTTP_PORT: 3030,
  HTTP_ROOT: path.resolve(__dirname, '../static/'),
  HTTP_UPLOAD: path.resolve(__dirname, '../static/upload/')
};
