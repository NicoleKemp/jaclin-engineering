var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/* Task to compile less */
gulp.task('compile-less', function(done) {
  gulp.src('./src/init.less')
    .pipe(less())
    .pipe(gulp.dest('./distro/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
    done();
});
/* Task to watch less changes */
gulp.task('watch-less', function(done) {
    gulp.watch('./src/**/*.less')
        .on('change', function(path, stats) {
            console.log('File ' + path + ' was changed');
        }).on('unlink', function(path) {
        console.log('File ' + path + ' was removed');
    });
    done();
});

gulp.task('serve', function (done) {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./distro/"
        }
    });
    gulp.watch("./src/**/*.less").on("change", reload);
    gulp.watch("./distro/*.html").on("change", reload);
    done();
});

/* Task when running `gulp` from terminal */
// gulp.task('default', ['watch-less', 'serve']);
gulp.task('default', gulp.series('watch-less', 'serve'));
