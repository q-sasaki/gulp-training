const gulp = require("gulp")
const sass = require("gulp-sass")
const cssmin = require("gulp-cssmin")
const rename = require("gulp-rename")
const htmlmin = require("gulp-htmlmin")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")

gulp.task("htmlmin", () => {
  gulp.src("src/html/**/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/html"))
})

gulp.task("sass", function() {
  gulp.src("src/sass/**/*.scss")
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/css"))
})

gulp.task("compress", () => {
  gulp.src("src/js/**/*.js")
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/js"))
})

gulp.task("default", ["htmlmin", "sass", "compress"])