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


// htmltask
gulp.task("html:minify", () => {
  console.log(`\n༼ つ ◕_◕ ༽つ HTML minify \n`)
  gulp.src("src/html/**/*.html")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist/html"))
})

gulp.task("html:copy", () => {
  console.log(`\n༼ つ ◕_◕ ༽つ HTML watch \n`)
  gulp.src("src/html/**/*.html")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(gulp.dest("dist/html"))
})


// sass task
gulp.task("sass:minify", () => {
  console.log(`\n(☞ﾟ∀ﾟ)☞ SASS minify \n`)
  gulp.src("src/sass/**/*.scss")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(cssmin())
    .pipe(gulp.dest("dist/css"))
})

gulp.task("sass:copy", () => {
  console.log(`\n(☞ﾟ∀ﾟ)☞ SASS watch \n`)
  gulp.src("src/sass/**/*.scss")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulp.dest("dist/css"))
})


// js task
gulp.task("js:minify", () => {
  console.log(`\n(づ￣ ³￣)づ JS minify \n`)
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
    .pipe(gulp.dest("dist/js"))
})

gulp.task("js:copy", () => {
  console.log(`\n(づ￣ ³￣)づ JS watch \n`)
  gulp.src("src/js/**/*.js")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(gulp.dest("dist/js"))
})


// images task
gulp.task("images:minify", () => {
  console.log(`\n༼ง ◉_◉༽ง IMAGES minify \n`)
  gulp.src("src/images/sunfish.png")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
})

gulp.task("images:copy", () => {
  console.log(`\n༼ง ◉_◉༽ง IMAGES watch \n`)
  gulp.src("src/images/sunfish.png")
    .pipe(plumber({
      errorHandler: notify.onError(
        "Error: <%= error.message %>"
      )
    }))
    .pipe(gulp.dest("dist/images"))
})


gulp.task("clean", () => {
  console.log("\nε＝ε＝ε＝(((((ﾉ｀･Д･)ﾉ CLEAN UP\n")
  // ワイルドカードがうまくいかないので一旦パスを直書き
  // del(["dist/**/*"])
  del(["dist/html/index.html", "dist/css/index.css", "dist/js/index.js", "dist/images/sunfish.png"])
})


gulp.task("watch", () => {
  gulp.watch("src/html/**/*", ["html:copy"])
  gulp.watch("src/sass/**/*", ["sass:copy"])
  gulp.watch("src/js/**/*", ["js:copy"])
  gulp.watch("src/images/**/*", ["images:copy"])
})


gulp.task("build", ["html:minify", "sass:minify", "js:minify", "images:minify"])
gulp.task("copy", ["html:copy", "sass:copy", "js:copy", "images:copy"])


gulp.task("prod", ["clean", "build"])
gulp.task("dev", ["clean", "copy", "watch"])


gulp.task("default", ["clean", "build", "watch"])
// もしタスクが順番通りに行かない場合はこっちを使う
// gulp.task("default", () => {
//   return runSequence(
//     "clean",
//     "build",
//     "watch"
//   )
// })