/*
  Buffer的基本操作
  Buffer本质上就是字节数组
  1、构造方法（类）
  2、静态方法
  3、实例方法
*/

// 实例化 Buffer 对象
// let buf = new Buffer(5); // 弃用
let buf = Buffer.alloc(5); // size
console.log(buf);

let buf1 = Buffer.from('hello', 'utf8'); // string/array
console.log(buf1);

let buf2 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf2.toString());

// 静态方法
console.log(Buffer.isEncoding('utf8')); // 是否支持某种编码
console.log(Buffer.isEncoding('gbk'));

let buf3 = Buffer.from('hello');
console.log(Buffer.isBuffer(buf3)); // 是否是 buffer 对象
console.log(Buffer.isBuffer({}));

let buf4 = Buffer.from('中国', 'utf8');
console.log(Buffer.byteLength(buf4)); // utf8 是 6，ascii 是 2 且会乱码
console.log(buf4.toString());

let buf5_1 = Buffer.alloc(3);
let buf5_2 = Buffer.alloc(5);
let buf5_3 = Buffer.concat([buf5_1, buf5_2]); // 连接 Buffer
console.log(Buffer.byteLength(buf5_3));

// 实例方法
let buf6 = Buffer.alloc(5);
// 向 Buffer 对象中写入内容，hello是5个字符，2是第三个，后一个2是写入几个字节(在三个中写入两个)
buf6.write('hello', 2, 2);
console.log(buf6, buf6.toString());

let buf7 = Buffer.from('hello');
let newbuf = buf7.slice(2, 3); // 截取 Buffer，起始位置 - 结束未知
console.log(buf === buf1); // false
console.log(newbuf.toString()); // l

// toJSON方法不需要显式调用，当JSON.stringify方法调用的时候会自动调用toJSON方法
let buf8 = Buffer.from('hello');
const json = JSON.stringify(buf8); // 转成 10 进制
console.log(json);
