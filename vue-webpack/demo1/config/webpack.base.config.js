const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports= {
    mode:'development',
    entry: {
        app:'./main.js'
    },
    output: {
        path: path.join(__dirname,'../dist'),
        filename: "[name].js"
    },
    plugins: [

        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        })
    ]
}