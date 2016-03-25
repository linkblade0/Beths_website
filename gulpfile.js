'use strict'

const
  gulp     = require('gulp')
, concat   = require('gulp-concat')
, uglify   = require('gulp-uglify')
, server   = require('gulp-webserver')
, uglicss  = require('gulp-uglifycss')
, annotate = require('gulp-ng-annotate')

gulp.task('server', () => {
  gulp.src('./public')
  .pipe(server({
    livereload : true
  , open       : true
  , port       : 9000
  }))
})


gulp.task('css', () => {
  gulp.src('./main/styles/*.css')
  .pipe(uglicss())
  .pipe(concat('css.min.css'))
  .pipe(gulp.dest('./public'))
})

gulp.task('js', () => {
  gulp.src('./main/**/*.js')
  .pipe(annotate())
  // .pipe(uglify())
  .pipe(concat('js.min.js'))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch', () => {
  gulp.watch('./main/styles/*.css', ['css'])
  gulp.watch('./main/**/*.js', ['js'])
  gulp.watch('./public/*.html', ['html'])
})

gulp.task('default', ['css', 'js', 'server', 'watch'])
