### GULP
  #### 安装 gulp
```
  cnpm i gulp -g 启动器-全局
  cnpm i gulp -D 功能库-本地

  gulp --version

  **/ 任意目录

  gulp.watch([文件列表], [任务列表])
  gulp.watch(['./src/js/**/*.js'], ['js'])
```
  #### 编写配置
```
  gulpfile.js
```
  #### gulp-uglify 压缩
```
  cnpm i gulp-uglify -D
```
  #### gulp-concat 连接
```
  cnpm i gulp-concat -D

  concat('bundle.min.js')
```
  #### gulp-rename 重命名
```
  cnpm i gulp-rename -D

  rename({suffix: '.min'})
  suffix：后缀
```
  #### gulp-babel 编译 es6
```
  cnpm i gulp-babel @babel/core @babel/cli @babel/preset-env -D
  
  @babel/core：核心库
  @babel/cli：命令行工具
  @babel/preset-env：预设
```
  #### gulp-sourcemaps 保留压缩前的源码
```
  cnpm i gulp-sourcemaps -D

  sourcemaps.init() 先初始化
  uglify() 再编译
  sourcemaps.write() 最后写
```
  #### gulp-cssmin 压缩 css
```
  cnpm i gulp-cssmin -D
```
  #### gulp-less 编译 less
```
  cnpm i gulp-less -D
```
  #### gulp-imagemin 压缩 image
```
  cnpm i gulp-imagemin -D

  imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
  ])

  gifsicle：图层交换
  interlaced：隔行扫描，先整体模糊，再逐行清晰

  mozjpeg：优化 jpeg
  progressive：渐进式，同 interlaced

  optipng：png 本身是无损压缩
  optimizationLevel：压缩级别，5是最高级
```
  #### livereload 热更新
```
  1.装服务器：cnpm i -g http-server

  2.装依赖：cnpm i gulp-livereload -D

  3.装 chrome 插件：./livereload_2_1_0_0.crx
```
