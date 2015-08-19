var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');

gulp.task('default', function () {
    return gulp.src('./elements/elements.html')
        .pipe(vulcanize())
        .pipe(crisper())
        .pipe(gulp.dest('./build'));
});