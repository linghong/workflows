var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass')
	connect = require('gulp-connect');

var coffeeSource =['components/coffee/tagline.coffee'];
var jsSource = [
	'components/scripts/rclick.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js'
	];
var sassSource = ['components/sass/style.scss'];
var htmlSource = ['builds/development/*.html'];
var jsonSource = ['builds/development/js/*.json'];

gulp.task('coffee', function(){
	gulp.src(coffeeSource)
	.pipe(coffee({bare:true})
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function(){
	gulp.src(jsSource)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('builds/development/js'))
	.pipe(connect.reload())
});

gulp.task('compass', function(){
	gulp.src(sassSource)
	.pipe(compass({
		sass: 'components/sass',
		image: 'builds/development/images',
		style: 'expanded'
		})
		.on('error', gutil.log))
	.pipe(gulp.dest('builds/development/css'))
	.pipe(connect.reload())
});

gulp.task('html', function(){
	gulp.src(htmlSource)
	.pipe(connect.reload())	
});

gulp.task('json', function(){
	gulp.src(jsonSource)
	.pipe(connect.reload())	
});

gulp.task('watch', function(){
	gulp.watch(coffeeSource, ['coffee']);
	gulp.watch(jsSource, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
	gulp.watch(htmlSource, ['html']);
	gulp.watch(jsonSource, ['json']);
});

gulp.task('connect', function(){
	connect.server({
		root: 'builds/development',
		livereload : true
	})
});


gulp.task('default', ['html','json','coffee','js', 'compass','connect','watch']);