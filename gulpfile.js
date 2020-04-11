const {src, task, dest, series, parallel, watch} = require('gulp');
const eslint = require('gulp-eslint');
const useref = require('gulp-useref');
const browsersync = require('browser-sync').create();
const fs = require('fs');
const browserify = require('browserify');
const source = require('vinyl-source-stream');


function js() {
  return browserify('app/js/main.js').bundle()
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('bundle.js'))
      .pipe(dest('dist'))
      .pipe(browsersync.reload({ stream: true }));
}

function lint() {
  return src('app/js/**/*.js')
      .pipe(eslint({ configFile: '.eslintrc'}))
      .pipe(eslint.format())
      //.pipe(eslint.failAfterError());
}

function lint_to_file() {
  return src('app/js/**/*.js')
      .pipe(eslint({ configFile: '.eslintrc'}))
      .pipe(eslint.format())
      .pipe(eslint.format('html', fs.createWriteStream('checkstyle.html')));
}

// Init BrowserSync.
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist"
    }
  });
  done();
}

function watchFiles() {
  watch(
    ['app/js/*.js', 'app/js/**/*.js'],
    { events: 'all', ignoreInitial: false },
    js
  );
}

exports.default = parallel(browserSync, watchFiles);
exports.lint = lint_to_file;
