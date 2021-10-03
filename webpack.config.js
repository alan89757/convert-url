const path = require('path');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'convert.js',
        library: 'convert',
        libraryTarget: 'umd'
    }
}