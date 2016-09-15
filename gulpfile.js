var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
  gulp.src('./src/slugify.js')
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(rename({'suffix': '.min'}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./'))
});