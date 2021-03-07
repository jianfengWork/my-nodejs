#### 微信：公众号、小程序
```
  1.订阅号：每天群发1次；存在方式-折叠(显示在'订阅号'文件夹中)；个人
  2.服务号：每月群发4次，功能强大；存在方式-好友列表；可以申请自定义菜单；企业
  3.小程序：强大、无法脱离微信；存在方式-好友列表上方
```

#### 交互方式(我方WEB服务器使用 token 识别微信服务器)
```
  1.需要一台 WEB服务器
  2.去 订阅号 管理后台：配置 WEB服务器域名，填写 token（点击提交时，会发送 signature 请求，需要 WEB服务器 根代码有 validator）
    可用 百度bae：https://cloud.baidu.com/product/bae.html（使用 svn/git 提交代码，并提供二级域名）
```

#### 校验Token
```
  /?signature=58a07886aeec12e4d8f2521ac777d425fd723c7e&echostr=7833260604640908667&timestamp=1545913465&nonce=2101019453

  signature：由 token、时间戳、nonce 共同组成
  echostr：需要发送回去的文本
  timestamp：时间戳
  nonce：随机数
```
#### interface
```
{
  ToUserName: 'gh_d9a3d03249sa',
  FromUserName: 'ops4v0g_EFWFARCKFt-0x9z0aLiE',
  CreateTime: '1545917346',
  MsgType: 'text',
  Content: 'sd',
  MsgId: '6639664444097694548'
}
```
