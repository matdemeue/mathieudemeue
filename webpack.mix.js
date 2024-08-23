// webpack.mix.js

let mix = require('laravel-mix');

mix.sass('src/sass/main.scss', 'css').setPublicPath('dist').disableNotifications();