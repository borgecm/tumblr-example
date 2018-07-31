/* Gulpfile.js */
let gulp = require('gulp')
let gutil =  require('gulp-util')
let sass = require('gulp-sass')
let webserver = require('gulp-webserver');
let uglify = require('gulp-uglify');    
let path = require('path')
const eslint = require('gulp-eslint');

/* tasks */
// gulp.task(
//   name : String,
//   deps : [] :: optional,
//   cb : fn
// )

/* Styles task */
gulp.task('styles', () => {
    return gulp.src('src/scss/main.scss')
        .pipe(sass({includePaths: [
                path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/scss'),
                path.join(__dirname, 'node_modules/bootstrap/scss'),
                path.join(__dirname, 'src/scss')]
            , outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/css/'))
})

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
})

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['styles'],cb => cb)
    gulp.watch('src/**/*.html', ['html'],cb => cb)
})

gulp.task('server', () => {
    gulp.src('dist/')
        .pipe(webserver({
            livereload: true,
            open: true
        }))
})

/**
 * Copies font awesome fonts into dist folder
 */
gulp.task('fonts', () => {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('dist/fonts/'));
  });

gulp.task('overwrite_vars', () => {
return gulp.src('src/scss/helpers/_variables.scss')
    .pipe(gulp.dest('node_modules/@fortawesome/fontawesome-free/scss'));
});

gulp.task('lint-css', function lintCssTask() {
    const gulpStylelint = require('gulp-stylelint');
  
    return gulp
      .src('src/scss/*.scss')
      .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [
          {formatter: 'string', console: true}
        ]
      }));
  });

gulp.task('compress', function(){
    return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
})
 
gulp.task('lint-js', () => {
    return gulp.src(['src/js/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('start', [
    'html',
    'lint-css',
    'styles',
    'fonts',
    'lint-js',
    'compress',
    'server',
    'watch'    
], cb => cb)


