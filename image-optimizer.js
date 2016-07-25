var gulp = require('gulp');
var smushit = require('gulp-smushit');
 
gulp.task('default', function () {
    return gulp.src('img/**/*.{jpg,png}')
        .pipe(smushit())
        .pipe(gulp.dest('dist'));
});