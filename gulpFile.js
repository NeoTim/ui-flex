(function(){
  var wiredep = require('wiredep');
  var gulp    = require('gulp');
  var $       = require('gulp-load-plugins')({lazy:false});




var paths = {
  index: './client/index.html',
  root: './client',
  html: './client/**/*.html',
  scripts: './client/app/**/*.js',
  styles: './client/app/**/*.css',
  stylus: './client/app/styles/index.styl',
  dist: './dist'
}



gulp
  .task('default', $.sequence('bower:dev', 'stylus:dev', 'inject:dev', 'server:dev', 'watch:dev'))
  .task('server:dev', startServer)
  .task('watch:dev', startWatch)
  .task('inject:dev', startInject)
  .task('stylus:dev', startStylus)
  .task('bower:dev', startBower)

gulp
  .task('dist', $.sequence('stylus:dist', 'scripts:dist'))
  .task('stylus:dist', distStylus)
  .task('scripts:dist', distScripts);

function startServer(){
  require('./server');

}
function startWatch(){
  $.livereload();
  $.livereload.listen();
  // gulp.watch('./client/app/**/*.css', $.livereload.changed);
  gulp.watch('./client/app/**/*.js', $.livereload.changed);
  gulp.watch('./client/**/*.html', $.livereload.changed);
  gulp.watch(['./client/app/styles/**/*.styl', './client/app/styles'], ['stylus:dev', $.livereload.changed])
}

function startStylus(){
  return gulp.src(paths.stylus)
    .pipe( $.stylus() )
    .pipe( $.concat('styl.css') )
    .pipe( gulp.dest('./client/app') )
}

function startInject(){
  var target  = gulp.src( paths.index );
  var scripts = gulp.src( paths.scripts, {read:false} );
  var styles  = gulp.src( paths.styles, {read:false} );

  return target
    .pipe( $.inject( scripts,  {relative:true}) )
    .pipe( $.inject( styles,  {relative:true}) )
    .pipe( gulp.dest( paths.root ) );
}

function startBower(){
  var wire = wiredep.stream

  return gulp.src(paths.index)
    .pipe(wire())
    .pipe(gulp.dest(paths.root))
}

function distStylus(){
  return gulp.src(paths.stylus)
    .pipe($.stylus())
    .pipe($.concat('ng-flex.css') )
    .pipe(gulp.dest( paths.dist ))
}
function distScripts(){
  return gulp.src(paths.scripts)
    .pipe($.concat('ng-flex.js'))
    .pipe(gulp.dest( paths.dist ))
}

})();