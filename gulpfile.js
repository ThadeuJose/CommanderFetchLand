const {
  src, dest, watch,
} = require('gulp');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');


function ts() {
  return browserify('app/js/main.js')
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(dest('dist'))
    .pipe(browserSync.reload({ stream: true }));
}

function html() {
  return src('app/index.html')
    .pipe(dest('dist'))
    .pipe(browserSync.reload({ stream: true }));
}

function css() {
  return src('app/css/main.css')
    .pipe(dest('dist/css'))
    .pipe(browserSync.reload({ stream: true }));
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
  watch('app/css', css);
  watch('app/*.html', html);
  watch('app/js/**/*.ts', ts);
}

exports.default = watchFiles;
