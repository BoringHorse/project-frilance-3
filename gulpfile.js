var gulp = require('gulp'),
	concatCSS = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css'),
	browserSync = require('browser-sync'),
	less = require('gulp-less'),
	prefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		},
		notify: false
	});

	gulp.watch('app/index.html').on('change', browserSync.reload);
	gulp.watch('app/less/*.less', ['less']);
});

gulp.task('less', function() {
	return gulp.src('app/less/*.less')
			.pipe(less('app/css/'))
			.pipe(cleanCSS())
			.pipe(prefixer({
				browsers: ["last 20 version"],
				cascade: true
			}))
			.pipe(gulp.dest('app/css/'))
			.pipe(browserSync.stream());
});