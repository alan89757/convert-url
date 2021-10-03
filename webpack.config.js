const path = require('path');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        library: 'library',
        library: 'umd'
    }
}