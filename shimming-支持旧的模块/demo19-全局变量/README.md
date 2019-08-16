##Build

```$xslt
npm install
npm run build
```

 ProvidePlugin 两种用法：
 1、直接引入模块，引入的就是全局变量
 ```

 new webpack.ProvidePlugin(({
             _: 'lodash'
            $: "jquery"
        }))
```
2、直接引入模块的下的方法
```
 new webpack.ProvidePlugin(({
            join: ['lodash', 'join'],
            $: "jquery"
        }))
```
我们还可以使用 ProvidePlugin 暴露某个模块中单个导出值，只需通过一个“数组路径”进行配置（例如 [module, child, ...children?]）。所以，让我们做如下设想，无论 join 方法在何处调用，我们都只会得到的是 lodash 中提供的 join 方法。