const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports= {

    entry: {
        app:'./main.js'
    },
    output: {
        path: path.join(__dirname,'../dist'),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test:/.vue$/,
                loader: "vue-loader",
                exclude:/node_modules/, //排除 node_modules 文件夹
                options: {
                    extractCSS:true  //提取.vue 文件的 style 作为单个 css 文件。
                }
            },
            {
                test:/.css$/,
                loader: "style-loader!css-loader",
                exclude:/node_modules/, //排除 node_modules 文件夹

            },
            {
                test:/.js$/,
                loader: "babel-loader",
                exclude:/node_modules/, //排除 node_modules 文件夹
                options: {
                    presets:['env']//作为参数传入 babel-loader,babel-loader 会根据浏览器的不同，自动编译成 es5或者 es6语法
                }
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //设置别名，不然使用 import  识别不了 vue
            '@': path.join(__dirname, 'src')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        })
    ]
}