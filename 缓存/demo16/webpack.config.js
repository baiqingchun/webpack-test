const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: 'single',
         splitChunks: {
           cacheGroups: {
                 vendor: {
                       test: /[\\/]node_modules[\\/]/,
                           name: 'vendors',
                           chunks: 'all'
                     }
               }
         }
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
}
