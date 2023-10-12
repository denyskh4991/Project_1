const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

function style() {
    return gulp
        .src("src/styles/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("styles.css"))
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp
        .src("src/index.js")
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./",
        },
    });

    gulp.watch("src/styles/**/*.scss", style);
    gulp.watch("src/index.js", scripts);
    gulp.watch("*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.scripts = scripts;
exports.serve = serve;



