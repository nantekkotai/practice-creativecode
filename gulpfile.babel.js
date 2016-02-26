import gulp from 'gulp';
import browserSync from 'browser-sync';

const srcPath = './src/'

gulp.task('serve', () => {
  browserSync.init({
    open: false,
    server: srcPath
  });

  gulp.watch(`${srcPath}**`, () =>{
    browserSync.reload();
  });
});

gulp.task('default', ['serve']);
