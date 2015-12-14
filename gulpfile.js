var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');

gulp.task('babel', function() {
    gulp.src('multi-select.jsx')
        .pipe(babel({presets: [
            'es2015',
            'react'
        ]}))
        .pipe(concat('multi-select.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('less', function() {
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['babel', 'less']);
