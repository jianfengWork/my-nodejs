const gulp = require('gulp');
const livereload = require('gulp-livereload');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const js_path = ['./src/concat-js/**/*.js'];

gulp.task('js', () => {
  return gulp.src(js_path)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
    .pipe(livereload());
});

gulp.task('watch', () => {
  // 开启 livereload 的服务
  livereload.listen();

  // 重新编译 js
  gulp.watch(js_path, ['js']);

  // 监听 html 等，标记文件修改
  gulp.watch([
    './index.html',
    ...js_path,
  ], file => {
    livereload.changed(file.path);
  });
});

gulp.task('default', ['js', 'watch']);
