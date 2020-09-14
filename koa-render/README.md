### 服务端渲染：pug、ejs
```
  1.安全性高
  2.利于SEO
  3.需要刷新页面获得更新
```
#### pug(jade)：侵入式，破坏了html结构，离开了 pug 需要重新布局
```
  title pug：空格后是字符
  title=title：= 后是变量
  script.：. 后面缩进部分归 script
  meta(charset="utf-8")：() 添加属性
```
#### ejs：非侵入式
```
  <%=item%>：代码写在 <% %> 内，输出 <%= %> 
```

### 客户端渲染：vue、react
```
  1.节约流量
  2.用户体验好
```
