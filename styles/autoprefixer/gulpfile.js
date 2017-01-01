var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var insert = require('gulp-insert'); 

gulp.task('styles', function() {
  gulp.src('_snippets/*.scss').
    pipe( autoprefixer() ).
    pipe( insert.prepend( "\n")).
    pipe( insert.prepend( "// #############################\n")).
    pipe( insert.prepend( "// , or, 'gulp styles' to generate styles once. See more on gulpfile.js on styles/autoprefixer \n" )).
    pipe( insert.prepend( "// 'gulp' on folder styles/autoprefixer \n" )).
    pipe( insert.prepend( "// to modify files, modify this in /styles/autoprefixer/_snipeets and run \n" )).
    pipe( insert.prepend( "// THIS FILE IS GENERATED, PLEASE DO NOT MODIFY\n" )).
    pipe( insert.prepend( "// #############################\n")).
    pipe( insert.append( "// #############################\n")).
    pipe( insert.append( "// THIS FILE IS GENERATED, PLEASE DO NOT MODIFY\n" )).
    pipe( insert.append( "// #############################\n")).
    pipe( gulp.dest( "../_snippets/_autoprefixed" ) );
});

gulp.task('default', function() {
  gulp.watch("_snippets/*.scss", ['styles']);


});
