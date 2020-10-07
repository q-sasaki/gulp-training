const gulp = require("gulp")
const sass = require("gulp-sass")
const cssmin = require("gulp-cssmin")
const rename = require("gulp-rename")

gulp.task("sass", function() {
  gulp.src("sass/**/*.scss")
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/css"))
})