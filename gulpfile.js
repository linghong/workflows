var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass');

var coffeeSource =['components/coffee/tagline.coffee'];
var jsSource = [
	'components/scripts/rclick.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js'
	];
var sassSource = ['components/sass/style.scss']

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
});