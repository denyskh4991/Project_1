const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('styles', () => {
    return gulp.src('src/styles/styles.css')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});


gulp.task('default', () => {
    browserSync.init({
        server: './dist',
    });

    gulp.watch('src/styles/styles.css', ['styles']);
    gulp.watch('dist/index.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', /* інші задачі Gulp */]);