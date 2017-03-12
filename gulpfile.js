var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('browserSync', ['nodemon'], function() {
	browserSync.init(null, {
		files: ['www/**/*.*'],
		port: 7000,
		server: {
			baserDir: 'www'
		}
	});
});

gulp.task('nodemon', function(cb) {
	var started = false;

	return nodemon({
		script: 'server.js'
	}).on('start', function () {
		//to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
		} 
	});
});

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch',['sass', 'browserSync'], function() {
	gulp.watch('www/scss/**/*.scss', ['sass']);
	gulp.watch('www/**/*.html', browserSync.reload);
	gulp.watch('www/js/**/*.js', browserSync.reload);
});