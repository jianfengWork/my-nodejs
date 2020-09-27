### WEBPACK
  #### 安装 webpack
```
  cnpm i webpack -g 功能库-全局
  webpack --version

  loader：帮助 webpack 处理 js 以外的文件

  plugin：增强 loader 的功能
```
  #### 编写配置
```
  webpack.config.js
```
  #### webpack-dev-server 热更新
```
  cnpm i webpack webpack-cli webpack-dev-server -D

  首先 webpack-dev-server 会读 webpack.config.js，
  编译的结果不会写到资盘上，而是放在缓存里，追求编译速度，
  启动位置：相对于根目录启动

  普通编译：<script src="./build/main.min.js" charset="utf-8"></script>
  dev-server编译：<script src="/main.min.js" charset="utf-8"></script>
  
  不能直接命令行启动，需要 package.json：npm run start
  "scripts": {
    ...,
    "start": "webpack-dev-server"
  }
```
  #### css-loader style-loader 处理 css
```
  cnpm i css-loader style-loader -D

  css-loader：让 webpack 认识 css
  style-loader：让样式变成 style 标签
```
  #### postcss-loader autoprefixer 兼容各浏览器前缀
```
  cnpm i postcss-loader autoprefixer -D

  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
```
  #### file-loader 读取并且输出文件
```
  cnpm i file-loader -D
```
  #### url-loader 读取并且输出 base64
```
  cnpm i url-loader -D
```
  #### less-loader 识别 less
```
  cnpm i less less-loader -D
```
  #### babel-loader 识别 es6
```
  cnpm i babel-loader @babel/core @babel/cli @babel/preset-env -D
```
  #### eslint-loader 代码质量
```
  cnpm i eslint eslint-loader -D
```
