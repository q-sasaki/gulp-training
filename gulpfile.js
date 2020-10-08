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
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")

gulp.task("html", () => {
  console.log(`\n༼ つ ◕_◕ ༽つ HTML Minify \n`)
  gulp.src("src/html/**/*.html")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/html"))
})

gulp.task("sass", () => {
  console.log(`\n(☞ﾟ∀ﾟ)☞ SASS Minify \n`)
  gulp.src("src/sass/**/*.scss")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/css"))
})

gulp.task("js", () => {
  console.log(`\n(づ￣ ³￣)づ JS Minify \n`)
  gulp.src("src/js/**/*.js")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/js"))
})

gulp.task("images", () => {
  console.log(`\n༼ง ◉_◉༽ง IMAGES Minify \n`)
  gulp.src("src/images/sunfish.png")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(imagemin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/images"))
})

gulp.task("watch", () => {
  gulp.watch("src/html/**/*", ["html"])
  gulp.watch("src/sass/**/*", ["sass"])
  gulp.watch("src/js/**/*", ["js"])
  gulp.watch("src/images/**/*", ["images"])
})

gulp.task("clean", () => {
  console.log("\nε＝ε＝ε＝(((((ﾉ｀･Д･)ﾉ CLEAN UP\n")
  // ワイルドカードがうまくいかないので一旦パスを直書き
  // del(["dist/**/*"])
  del(["dist/html/index.min.html", "dist/css/index.min.css", "dist/js/index.min.js", "dist/images/sunfish.min.png"])
})

gulp.task("build", ["html", "sass", "js", "images"])

gulp.task("default", ["clean", "build", "watch"])
// もしタスクが順番通りに行かない場合はこっちを使う
// gulp.task("default", () => {
//   return runSequence(
//     "clean",
//     "build",
//     "watch"
//   )
// })

gulp.task("prod", ["clean", "build", "watch"])
gulp.task("dev", ["clean", "watch"])