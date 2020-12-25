### 安装
```
  下载：https://downloads.mysql.com/archives/community/

  iterm环境变量：
    1.PATH="$PATH":/usr/local/mysql/bin

  操作：
    1.登录：mysql -u root -p
    2.创建数据库：CREATE DATABASE 数据库名(jianfeng);
    3.选择数据库：use 数据库名;
    4.创建数据表：show tables; 查看数据库中的表

  nodejs报错：ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol
  解决：
    1.mysql -u root -p
    2.ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'jianfeng';
    3.use jianfeng
```

### 数据库：
```
  1.类型
    文件型数据库：sqlite，简单，适用于单个用户，手机App适用
    关系型数据库：MySQL、Oracle，功能性强大，但是性能不是最高
    分布式数据库：mongoDB，分散请求，数据安全性高，
    NoSQL：memcache、redis，性能高，功能性不强

  2.管理工具
    navicat
    phpmyadmin
```

### 主键：不重复，性能最高

### 字段类型：
```
  1.INT：数字类型
  2.VARCHAR：文本类型——短，text——2G
```

### 索引：
```
  1.唯一，不能重复
  2.索引——提高查询性能、降低其他操作性能、更占空间(字典)
  3.全文索引——适合文本搜索
  4.主键 = 唯一 + 索引
```

### SQL——4大语句
```
  增 INSERT
      INSERT INTO <表> (字段, ...) VALUES(值, ...);
      INSERT INTO user_table (username, password) VALUES('lisi', '111111');

  删 DELETE
      DELETE FROM <表> WHERE 条件;
      DELETE FROM user_table WHERE ID=2;
  
  改 UPDATE
      UPDATE <表> SET 字段=新值, 字段=新值,... WHERE 条件;
      UPDATE user_table SET password='654321', username='blue2' WHERE ID=1;
  
  查 SELECT
      SELECT 字段列表 FROM <表> WHERE 条件 ORDER BY 字段 LIMIT 30,30;
```

### SQL——语句
```
  SELECT
  *, // 其余字段
  article_table.title AS article_title, // AS > 别名
  catalog_table.title AS catalog_title,
  article_table.ID AS article_ID
  FROM article_table LEFT JOIN // LEFT JOIN > 左连接，article_table 是主表，
  catalog_table ON article_table.catalog_ID=catalog_table.ID // ON 连接依据 id 相等
  ORDER BY article_table.created_time DESC LIMIT 10 // ORDER BY > 排序

  SELECT * FROM article_table WHERE title LIKE '%aaa%' // like > 模糊搜索
```

### createPool：连接池，空闲的连接拿出来用，用完再放回去

### co-mysql：异步 mysql，本身是个包装器，是对 myspl 的封装，可以使用异步操作 
