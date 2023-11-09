// webpack.mix.js

let mix = require('laravel-mix');

mix.sass('src/sass/styles.scss', 'css').setPublicPath('dist').disableNotifications();