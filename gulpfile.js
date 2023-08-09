// npm install -g gulp
// gulp

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('fancade/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'));
}

function watchTask() {
    watch('fancade/**/*.scss', buildStyles);
}

exports.default = series(buildStyles, watchTask);
