const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};
