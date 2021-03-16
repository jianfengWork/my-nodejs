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

  指定配置文件：webpack --config webpack.html.config.js
```
  #### webpack-dev-server 热更新
```
  cnpm i webpack webpack-cli webpack-dev-server -D

  首先 webpack-dev-server 会读 webpack.config.js，
  编译的结果不会写到资盘上，而是放在内存里，追求编译速度，
  启动位置：相对于根目录启动

  --open 主动打开浏览
  --port 3030 运行端口3030
  --contentBase src 默认会访问 / 路径下的 index.html，可以指定为 src
  --hot 热重载，只更改局部代码
  --config 指定起服务使用的配置文件 --config webpack.html.config.js

  普通编译：<script src="./build/main.min.js" charset="utf-8"></script>
  dev-server编译：<script src="/main.min.js" charset="utf-8"></script>
  
  不能直接命令行启动，需要 package.json：npm run start，文件会更新在 内存
  "scripts": {
    ...,
    "start": "webpack-dev-server"
  }
  
  打包发布需要 webpack 命令(package.json：npm run build)，将最新代码写入磁盘
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
  #### url-loader 读取并且输出(图片、字体)
```
  cnpm i file-loader url-loader -D
  file-loader 是 url-loader 的内部依赖，不需要显示调用
```
  #### less-loader 识别 less
```
  cnpm i less less-loader -D

  less 是 less-loader 的内部依赖，webpack.config.js 不需要显示调用
```
#### sass-loader 识别 scss
```
  cnpm i node-sass sass-loader -D

  node-sass npm 装不上，使用 cnpm
  node-sass 是 sass-loader 的内部依赖，不需要显示调用
```
  #### babel-loader 识别 es6
```
  cnpm i babel-loader @babel/core @babel/cli @babel/preset-env -D

  @babel/preset-env 转换 es 的预设版本，默认 es5
```
  #### eslint-loader 代码质量
```
  cnpm i eslint eslint-loader -D
```
  #### html-webpack-plugin 模版 html
```
  cnpm i eslint html-webpack-plugin -D

  当使用了 html-webpack-plugin，index.html 不需要手动引入 /main.min.js，会自动追加
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  plugins: [
    new HtmlWebpackPlugin({ // 生成内存中的页面
      template: path.resolve(__dirname, '/src/index.html'),
      filename: 'index.html', // 指定生成页面名称
    }),
  ]
```
  #### vue-loader 解析 .vue
```
  cnpm i vue-loader vue-style-loader vue-html-loader vue-template-compiler -D

  vue-style-loader：解析 .vue 内部 style，并与外部的 .css 文件融合
  vue-html-loader：解析 .vue 内部 templete
  vue-template-compiler：编译 .vue 组件
```
