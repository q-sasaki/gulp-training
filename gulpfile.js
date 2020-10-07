const gulp = require("gulp")
const sass = require("gulp-sass")

gulp.task("sass", function() {
  gulp.src("sass/**/*.scss")
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulp.dest("./dist/css"))
})