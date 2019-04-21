import gulp from 'gulp';
import postcss from 'gulp-postcss';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
// import cssnano from 'cssnano';
// import sourcemaps from 'gulp-sourcemaps';
import dest from 'gulp-dest';
import postcssImport from 'postcss-import';

gulp.task('test', (cb) => {
  console.log('I\'m using gulpfile with ES6');
  cb();
});

gulp.task('css', () => (
  gulp.src('./src/scss/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport,
      precss,
      autoprefixer,
      // cssnano,
    ]))
    // .pipe(sourcemaps.write())
    .pipe(dest('.', { ext: '.css' }))
    .pipe(gulp.dest('./build/css'))
));
