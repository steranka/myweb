var gulp = require('gulp');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');

var jsxSources = [ "./client/jsx/ClientApp.jsx", "./client/jsx/HelloUI.jsx"];

gulp.task('jsx',function(){
    return browserify({
		entries: jsxSources,
	})
	.transform(babelify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./server/public/js'));
});

gulp.task('dev',['jsx'],function(){
    gulp.watch('./client/jsx/*.jsx',['jsx'])
})