const url = require('url')

const arr = 'http://www.bing.com:8080/a/b/1.html?a=1&a=2&a=3'

const obj = 'http://www.bing.com:8080/a/b/1.html?username=jianfeng&password=12345'

console.log(url.parse(arr))
console.log(url.parse(arr, true).query) // { a: [ '1', '2', '3' ] }
console.log(url.parse(obj, true).query) // { username: 'jianfeng', password: '12345' }
