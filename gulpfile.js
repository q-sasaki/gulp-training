const gulp = require("gulp")
const sass = require("gulp-sass")
const cssmin = require("gulp-cssmin")
const rename = require("gulp-rename")
const htmlmin = require("gulp-htmlmin")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")
const imagemin = require("gulp-imagemin")

gulp.task("html", () => {
  gulp.src("src/html/**/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/html"))
})

gulp.task("sass", () => {
  gulp.src("src/sass/**/*.scss")
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/css"))
})

gulp.task("js", () => {
  gulp.src("src/js/**/*.js")
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/js"))
})

gulp.task("images", () => {
  gulp.src("src/images/sunfish.png")
    .pipe(imagemin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/images"))
})

gulp.task("default", ["html", "sass", "js", "images"])