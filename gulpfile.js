var gulp = require('gulp');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var run = require('gulp-sequence');
var del = require('gulp-clean-dest');
var uglyfly = require('gulp-uglyfly');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');
var concat = require('gulp-concat');


gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true,removeComments: true,}))
    .pipe(gulp.dest('build'));
});

gulp.task('style', function(){
	 gulp.src('source/*.css')
		.pipe(plumber())
        .pipe(concat('style.css'))
       	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(csso())
        .pipe(gulp.dest('build/source'));
});


gulp.task('compress', function() {
  gulp.src('js/main.js')
    .pipe(uglyfly())
    .pipe(gulp.dest('build/js'))
});
 
gulp.task('images', () =>{
   return gulp.src('images/*')
        .pipe(imagemin([
          imagemin.gifsicle({interlaced: true}),
          imagemin.jpegtran({progressive: true, optimizationLevel: 5}),
          imagemin.optipng({optimizationLevel: 5}),
          imagemin.svgo({plugins: [{removeViewBox: true}]})
]))
        .pipe(gulp.dest('build/images'));
});

gulp.task('build', function(fn){
	run('style', 'minify', 'compress', fn);
})

gulp.task("clean", function(){
	return del("build");
});

gulp.task("copy", function(){
	return gulp.src([
		"css/*.css",
	], {
		base: "."
	})
	.pipe(gulp.dest("build"));
});
