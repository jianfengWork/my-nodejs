const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.once('open', function() {
  console.log('connect...')
});

// 创建模型
const animalSchema = mongoose.Schema({
  name: String,
})

// 参数1.集合名  参数2.集合模型
const Animal = mongoose.model('animal', animalSchema);

// 通过模型去操作数据库
const kitty = new Animal({ name: 'cat' });

/* 注释依次打开 */

/* 查询 */
Animal.find((err, docs) => { // 查询 animal 集合
  if (err) return console.error(err);
  console.log(docs)
})

/* 增加 */
// kitty.save((err, docs) => {
//   if (err) return console.error(err);
//   console.log(docs)
// });

/* name 查询 */
Animal.find({ name: 'cat' }, (err, docs) => {
  if (err) return console.error(err);
  console.log(docs)
})

/* 修改 */
// Animal.findById(id, (err, docs) => { // ID查询
//   if (err) return console.error(err);
  
//   docs.name = docs.name + 1
//   docs.save((err, newdocs) => { // 修改
//     if (err) return console.error(err);
//     console.log(newdocs);
//   });
  
// })

/* 删除 */
Animal.deleteOne({_id: '60052261f7d2c10db5baa041'}, (err) => {
  if (err) return console.error(err);
  console.log('delete')
})
