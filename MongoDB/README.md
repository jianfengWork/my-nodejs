### 安装
  #### 系统部署
```
  cd /usr/local
  下载: sudo curl -O https:\/\/fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.9.tgz
  解压: sudo tar -zxvf mongodb-osx-ssl-x86_64-4.0.9.tgz
  重命名为 mongodb 目录: sudo mv mongodb-osx-x86_64-4.0.9/ mongodb

  将 MongoDB 的二进制命令文件目录（安装目录/bin）添加到 PATH 路径中:
  export PATH=/usr/local/mongodb/bin:$PATH

  数据存放路径: sudo mkdir -p /usr/local/var/mongodb
  日志文件路径: sudo mkdir -p /usr/local/var/log/mongodb

  数据读写权限: sudo chown 建峰 /usr/local/var/mongodb
  日志读写权限: sudo chown 建峰 /usr/local/var/log/mongodb

  mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
  设置数据存放目录: --dbpath
  设置日志存放目录: --logpath
  在后台运行:      --fork

  查看 mongod 服务是否启动: ps aux | grep -v grep | grep mongod

  运行方法1:
  export PATH=/usr/local/mongodb/bin:$PATH
  mongo

  运行方法2:
  cd /usr/local/mongodb/bin
  ./mongo
```
  #### 项目应用
```
  mongoose: https:\/\/mongoosejs.com/
  
  npm install mongoose -S

  node mongoose.js
```
  #### CMD 操作
```
  显示所有数据的列表: show dbs

  显示当前数据库对象或集合: db

  数据库
  连接指定数据库: use admin (如果数据库不存在，则创建数据库，否则切换到指定数据库，需要创建集合才被展示)
  删除数据库: db.dropDatabase()
  
  集合 (数据库中的表)
  创建集合: db.createCollection('animal')
  查询集合: show collections
  删除集合: db.animal.drop()

  文档 (document)
  插入文档: db.animal.insert/insertOne({name: 'cat'})
  查询文档: db.animal.find().pretty()
  删除文档: db.animal.remove({name: 'cat'})
```

### 存储结构
```
  - 一个计算机上可以有一个数据库服务实例
  - 一个数据库服务实例上可以有多个数据库
  - 一个数据库中可以有多个集合 (表)
    + 集合根据数据的业务类型划分
    + 例如用户数据，商品数据...
    + 对数据进行分类存储
    + 集合在 MongoDB 中，可以抽象为 []
  - 一个集合可以有多个文档
    + 文档在 MongoDB 中，可以抽象为 JSON 对象
    + 文档对象是动态的，可以随意生成
    animal: { // 数据库
      collection1: [
        { document1 },
        { document2 },
        { document3 },
      ],
      collection2: [], // 集合
      collection3: [],
    }
```
