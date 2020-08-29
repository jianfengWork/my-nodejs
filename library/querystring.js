const querystring = require('querystring')

console.log(querystring.parse('username=jianfeng&password=12345')) // { username: 'jianfeng', password: '12345' }

console.log(querystring.stringify({ username: 'jianfeng', password: '12345' })) // username=jianfeng&password=12345
