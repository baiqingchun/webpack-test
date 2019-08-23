这个是一点一点配置起来的 vue 项目。
```$xslt
npm install

npm run build
//or
 npm run server
```
其中vue 相关的是：
>vue-loader

```


 {
                test:/.vue$/,
                loader: "vue-loader",
                exclude:/node_modules/, //排除 node_modules 文件夹
                options: {
                    extractCSS:true  //提取.vue 文件的 style 作为单个 css 文件。
                }
            },

```
>const VueLoaderPlugin = require('vue-loader/lib/plugin')
```
    //在插件里引用
    new VueLoaderPlugin(),
```
>识别 vue

`'vue$': 'vue/dist/vue.esm.js'`主要是影响的`import Vue from 'vue'`，使 vue 在开发环境中引用vue.esm.js

vue.esm.js，预编译+运行时，也就是模板字符串和现在最常用的单文件组件.vue文件，需要经过它预编译转化成纯javascrit，然后再运行，适用于开发环境。

官方说法叫用来将模板字符串编译成为 JavaScript 渲染函数的代码。
```
  resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //设置别名，
            '@': path.join(__dirname, 'src')
        }
    }

```
可以测试下，如果没有`'vue$': 'vue/dist/vue.esm.js'`这一句会发生什么情况。

默认使用了仅运行版本，也就是除去了编译器部分。

>运行时 + 编译器 vs. 只包含运行时

如果你需要在客户端编译模板 (比如传入一个字符串给 template 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版：
```
// 需要编译器
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 不需要编译器
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})

```
也就是说默认使用了仅运行版本vue.runtime.esm.js,而这里我们需要编译版本。

所以需要加上别名
```
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' 
    }
  }
}
```
