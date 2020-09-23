### SVN 搭建
  #### 1.安装 svn 服务端：subversion
```
  yum install subversion -y
```
  #### 2.创建目录
```
  mkdir 名字(svn)
```
  #### 3.初始化 svn
```
  cd svn
  svnadmin create 目录(test)
```
  #### 4.配置 svn
```
  vim conf/passwd
    用户 = 密码 jianfeng = 123456

  vim conf/svnserve.conf
    anon-access = none 不允许匿名访问
    auth-access = write 登录允许写和读
    password-db = passwd 使用密码文件
```
  #### 5.启动服务
```
  svnserve -d -r 目录(/svn/test)
    daemon：守护模式，自动重启
    root：根目录
```
  #### 6.关闭防火墙
```
  iptables -F 清除防火墙规则，生产环境由运维配置
  iptables -L 查看防火墙
```

### GIT 搭建
  #### 1.安装 git 服务端
```
  yum install git -y
```
  #### 2.创建目录
```
  mkdir 名字(git)
```
  #### 3.初始化 git
```
  cd git
  git init --bare test.git
```
  #### 4.添加系统用户
```
  useradd 用户(jianfeng)
  passwd 密码(123456)
```
  #### 5.修改目录的拥有者权限
```
  chown -R <name>:<name> test.git
    chown：权限管理
    -R：递归查找
    jianfeng:jianfeng 人名:组名
```
  #### 6.clone
```
  git clone 用户名@服务器:/目录/仓库.git
    git clone jianfeng@192.168.183.130:/git/test.git test1
```
