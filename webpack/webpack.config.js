const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/main.js',
    app: './src/js/app',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].min.js'
  },
  module: { // 模块
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader',], // 从后向前运行 'postcss-loader'
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'file-loader',
      //   options: {
      //     outputPath: 'images/'
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/, // 处理图片
        loader: 'url-loader',
        options: {
          limit: 1024 * 32, // 32kb 以下的打包成 base64
          outputPath: 'images/',
        }
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/, // 排除
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      // {
      //   test: /\.js$/i,
      //   exclude: /node_modules/, // 排除
      //   loader: ['eslint-loader']
      // },
    ],
  },
  devtool: 'source-map', // 保留原始代码
  devServer: { // webpack-dev-server 配置入口
    hot: true, // 开启热更新
  },
  plugins: [
    new HtmlWebpackPlugin({ // 生成内存中的页面
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html', // 指定生成页面名称
      minify: {
        collapseWhitespace: true, // 压缩html
        removeComments: true, // 移除注释
      },
      chunks: ['main'],
    }),
    // http://localhost:3030/app.html
    new HtmlWebpackPlugin({ // 可以生成多个页面，并使用单独入口文件
      title: 'App',
      filename: 'app.html', // 指定生成页面名称
      chunks: ['app'], // 使用 app.js 为入口文件
    }),
    new CleanWebpackPlugin(), // 清理 build 文件夹
  ],
  resolve: {
    extensions: ['.js', '.css', '.less', '.scss', '.jsx'], // 自动补全识别后缀
  },
}

/**
 * 多入口
*/
// module.exports = {
//   mode: 'development',
//   entry: { // 入口
//     index1: './src/js/index1.js',
//     index2: './src/js/index2.js',
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'), // 出口
//     filename: '[name].min.js', // entry 里面的 key 是 filename 里面的 [name]
//   },
// }
