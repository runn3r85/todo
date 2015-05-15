var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function(){
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