var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('js', function(){
  browserify('./public/javascripts/src/app.jsx')
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/javascripts/build/'));
});


gulp.task('sass', function() {
  gulp.src('public/stylesheets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets/css'));
})

gulp.task('watch', function() {
  gulp.watch("public/javascripts/src/**/*.jsx", ["js"])
  gulp.watch("public/stylesheets/scss/*.scss", ["sass"]);
})


gulp.task('default', ['js', 'sass', 'watch'], function(){
  nodemon({
    script: './bin/www',
    ext: 'js html',
    env: {
      PORT: 3000
    },
    ignore: ["README.md", "node_modules/**", ".DS_Store", ".gitignore"]
  })
  .on('restart', function(){
    console.log('Restarting');
  });
});