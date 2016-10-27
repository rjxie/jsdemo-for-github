var gulp = require('gulp');
gulp.task('hello', function() {
	console.log('hello world!');
	gulp.src('src/index.html').pipe(gulp.dest('copy/'));
})