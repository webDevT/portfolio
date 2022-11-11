let gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass'));
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('clean', async function(){
	del.sync('docs')
})

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer({
			overrideBrowserslist:  ['last 8 versions']
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task('css', function(){
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		'node_modules/slick-carousel/slick/slick.css'
		])
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(concat('libs.css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('html', function(){
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream: true}))

});

gulp.task('script', function(){
	return gulp.src('app/js/*.js')
	.pipe(browserSync.reload({stream: true}))

});



gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('export', function(){
	let buildHtml = gulp.src('app/**/*.html')
		.pipe(gulp.dest('docs'));

	let BuildCss = gulp.src('app/css/**/*.css')
	.pipe(gulp.dest('docs/css'));

	let BuildJs = gulp.src('app/js/**/*.js')
	.pipe(gulp.dest('docs/js'));

	let BuildFonts = gulp.src('app/fonts/**/*.*')
	.pipe(gulp.dest('docs/fonts'));


	let BuildImg = gulp.src('app/img/**/*.*')
	.pipe(gulp.dest('docs/img'));
});

gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/js/*.js',gulp.parallel('script'));
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'sass', 'browser-sync', 'watch'))