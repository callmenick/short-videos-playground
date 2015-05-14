// require gulp
var gulp = require('gulp');

// require other packages
var autoprefixer = require('gulp-autoprefixer');

// styles task
gulp.task('styles', function() {
  return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'));
});

// watch task
gulp.task('watch', function() {
  gulp.watch('./src/css/*.css', ['styles']);
});

// default task
gulp.task('default', ['styles', 'watch']);