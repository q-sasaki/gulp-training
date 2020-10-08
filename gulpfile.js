const gulp = require("gulp")
const sass = require("gulp-sass")
const cssmin = require("gulp-cssmin")
const rename = require("gulp-rename")
const htmlmin = require("gulp-htmlmin")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")
const imagemin = require("gulp-imagemin")
const del = require("del")
const runSequence = require("run-sequence")

gulp.task("html", () => {
  gulp.src("src/html/**/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/html"))
})

gulp.task("sass", () => {
  gulp.src("src/sass/**/*.scss")
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/css"))
})

gulp.task("js", () => {
  gulp.src("src/js/**/*.js")
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/js"))
})

gulp.task("images", () => {
  gulp.src("src/images/sunfish.png")
    .pipe(imagemin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/images"))
})

// ワイルドカードがうまくいかないので一旦パスを直書き
gulp.task("clean", () => {
  del(["dist/html/index.min.html", "dist/css/index.min.css", "dist/js/index.min.js", "dist/images/sunfish.min.png"])
})

gulp.task("build", ["html", "sass", "js", "images"])

// もしタスクが順番通りに行かない場合はこっちを使う ↓
// gulp.task("default", () => {
//   return runSequence(
//     "clean",
//     "build"
//   )
// })

gulp.task("default", ["clean", "build"])

gulp.task("prod", ["clean", "build"])
gulp.task("dev", ["clean"])