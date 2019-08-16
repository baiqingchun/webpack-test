const path = require('path');
module.exports = {
    entry:{
        polyfills:'./src/polyfills.js',
        index:   './src/index.js',
    },

    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}
