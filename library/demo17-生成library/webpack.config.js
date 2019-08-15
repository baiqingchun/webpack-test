const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    externals: ['lodash'],
    output: {
        filename: 'library.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'library',
        libraryTarget: 'umd'
    }
}
