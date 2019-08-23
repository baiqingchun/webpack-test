const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
module.exports = merge(baseWebpackConfig,{})

