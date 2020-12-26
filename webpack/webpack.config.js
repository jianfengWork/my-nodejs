const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].min.js'
  },
  module: { // 模块
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader', ], // 从后向前运行 'postcss-loader'
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
  devServer: {},
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
