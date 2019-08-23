const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const  webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
module.exports = merge(baseWebpackConfig,{
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase:path.join(__dirname,'../dist'),//本地服务器须加载的页面所在目录
        // color:true,//终端输出的颜色为彩色
        // hot:true,//热部署
        // lazy:true,//webpack 加载的时候再进行编译
        // open:true,//是否自动打开浏览器
        // port:3000//端口号
        contentBase:path.join(__dirname,'../dist'),
        inline:true,
        hot:true,
        progress:true,
        open:true,
        port:3033//端口号
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        })
    ]
})
