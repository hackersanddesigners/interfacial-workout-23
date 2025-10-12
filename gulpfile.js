const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const jsonSass = require('gulp-json-sass');
const dartSass = require('sass');
const gulpSass = require('gulp-sass')(dartSass);

function handleError(err) {
  console.log(err);
  this.emit('end');
}

function compileSass() {
  return gulp.src('public/sass/*.scss')
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(gulpSass())
    .pipe(gulp.dest('public/css'));
}

function jsonToSass() {
  return gulp.src('content/page.json')
    .pipe(jsonSass())
    .pipe(concat('settings.scss'))
    .pipe(gulp.dest('public/sass'));
}

function cssTask() {
  return gulp.src('public/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(cleanCSS({ compatibility: 'ie9' }))
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('public/production'));
}

function watchFiles() {
  gulp.watch('content/page.json', gulp.series(jsonToSass, compileSass, cssTask));
  gulp.watch('public/sass/*.scss', gulp.series(compileSass, cssTask));
}

const build = gulp.series(jsonToSass, compileSass, cssTask);

exports.jsontosass = jsonToSass;
exports.sass = compileSass;
exports.css = cssTask;
exports.watch = watchFiles;
exports.build = build;
exports.default = gulp.series(build, watchFiles);
