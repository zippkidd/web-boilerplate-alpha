var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
	return gulp.src("src/js/script-example.js")
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(gulp.dest("dist/js"));
});
