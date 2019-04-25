import gulp from 'gulp';
import postcss from 'gulp-postcss';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
// import cssnano from 'cssnano';
// import sourcemaps from 'gulp-sourcemaps';
import postcssImport from 'postcss-import';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rigger from 'gulp-rigger';
import connect from 'gulp-connect';
import del from 'del';

const path = {
  dist: {
    html: 'dist/',
    js: 'dist/js/',
    css: 'dist/css/',
    img: 'dist/img/',
    fonts: 'dist/fonts/',
  },
  src: {
    html: [
      'src/**/*.html',
      '!src/template/**/*.*',
    ],
    js: 'src/js/**/*.js',
    style: 'src/scss/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*',
  },
  clean: './dist/*',
};

const configServer = {
  name: 'Front-end server',
  root: './dist',
  host: 'localhost',
  port: 9000,
  livereload: true,
};

const serverStart = (cb) => {
  connect.server(configServer);
  cb();
};

const clean = () => (
  del([path.clean])
);

const html = () => (
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.dist.html))
    .pipe(connect.reload())
);

const css = () => (
  gulp.src(path.src.style)
    // .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport,
      precss,
      autoprefixer,
      // cssnano,
    ]))
    .pipe(rename({ extname: '.css' }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dist.css))
    .pipe(connect.reload())
);

const js = () => (
  gulp.src(path.src.js)
    // .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dist.js))
    .pipe(connect.reload())
);

const watchFiles = (cb) => {
  gulp.watch(path.src.html, html);
  gulp.watch(path.src.style, css);
  gulp.watch(path.src.js, js);
  cb();
};

const watch = gulp.parallel(watchFiles, serverStart);
const build = gulp.series(clean, gulp.parallel(html, css, js));

exports.start = serverStart;
exports.clean = clean;
exports.html = html;
exports.css = css;
exports.js = js;
exports.watch = watch;
exports.build = build;
