const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin (),
        new UglifyJSPlugin({//配合 source-map 使用
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': require('../config/prod.env')
        })
    ]
})

