const tailwindcss = require('tailwindcss');
module.exports = {
    purge: ['./dist/*.html'],
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        'postcss-preset-env'
    ],
};