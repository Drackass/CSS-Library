// npm install -g gulp
// gulp

// purge css
// npm install gulp-purgecss --save-dev

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('fancade/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'));
}

function watchTask() {
    watch(['fancade/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
