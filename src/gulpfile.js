const {src, dest, watch, series, parallel} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync');
const app = require('./js/app');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const webpackConfig = require('./webpack.config');
const fileInclude = require('gulp-file-include');

const html = () => {
    return src('html/*.html')
    .pipe(fileInclude())
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
}

const css = () => {
    return src('css/*.css')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
}

const js = () => {
    return src('js/*.js')
    .pipe(babel())
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
}

const img = () => {
    return src('img/*.*')    
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
}

const ejs = () => {
    return src('views/*.ejs')
    .pipe(dest("./public"))
    .pipe(browserSync.stream())
}

const watcher = () => {
    watch('html/*.html', html, );
    watch('css/*.css', css);
    watch('img/*.img', img);
    watch('js/*.js', js);
    watch('views/*.ejs', ejs);
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    })
    app.listen(process.env.PORT || 3000);
}   


exports.dev = series(
    ejs,
    js,
    html,
    css,
    img,
    parallel(watcher, server)
);