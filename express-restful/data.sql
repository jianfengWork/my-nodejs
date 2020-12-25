--
-- 表的结构 `book`
--

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `author` varchar(32) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 插入数据
insert into book
  (name,author,category,description)
values
  ('三国演义', '罗贯中', '文学', '一个杀伐纷争的年代');insert into book
  (name,author,category,description)
values
  ('水浒传', '施耐庵', '文学', '108条好汉的故事');insert into book
  (name,author,category,description)
values
  ('西游记', '吴承恩', '文学', '佛教与道教的斗争');insert into book
  (name,author,category,description)
values
  ('红楼梦', '曹雪芹', '文学', '一个封建王朝的缩影');insert into book
  (name,author,category,description)
values
  ('天龙八部', '金庸', '文学', '武侠小说');
