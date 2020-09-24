const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');

/**
 * task > 任务
 * dest > 输出目录
 */

/** 单个 js */
// gulp.task('single-js', () => {
//   return gulp.src(['./src/js/*.js'])
//     .pipe(uglify())
//     .pipe(gulp.dest('./build/js/'));
// });
// gulp.task('default', ['single-js']);

/** 多个 js 连接一起，不加 concat 输出多个 js */
// gulp.task('concat-js', () => {
//   return gulp.src(['./src/concat-js/**/*.js'])
//     // .pipe(concat('bundle.min.js'))
//     .pipe(concat('bundle.min.js'))
//     .pipe(uglify())
//     // .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./build/js/'));
// });
// gulp.task('default', ['concat-js']);

/** es6 */
// gulp.task('babel-js', () => {
//   return gulp.src(['./src/concat-js/**/*.js'])
//     .pipe(concat('bundle.min.js'))
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     .pipe(uglify())
//     .pipe(gulp.dest('./build/js/'));
// });
// gulp.task('default', ['babel-js']);

/** sourcemaps */
gulp.task('sourcemaps-js', () => {
  return gulp.src(['./src/concat-js/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.min.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/js/'));
});

/** css */
gulp.task('css', () => {
  return gulp.src(['./src/css/**/*.css'])
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css/'));
});

/** less */
// gulp.task('css', () => {
//   return gulp.src(['./src/css/**/*.less'])
//     .pipe(sourcemaps.init())
//     .pipe(concat('style.min.css'))
//     .pipe(less())
//     .pipe(cssmin())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('./build/css/'));
// });

/** image */
gulp.task('image', () => {
  return gulp.src(['./src/images/**/*'])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(gulp.dest('./build/images/'));
});

/** 监听文件更改，自动更新 */
gulp.task('watch', () => {
  gulp.watch(['./src/concat-js/**/*.js'], ['sourcemaps-js'])
})

gulp.task('default', ['sourcemaps-js', 'css', 'image', 'watch']);
