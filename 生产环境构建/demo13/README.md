##Build

```$xslt
npm install
npm run build
```
运行`npm start`，打开浏览器控制台查看结果。

`webpack.DefinePlugin`这个插件创建一个在编译时可以配置的全局常量。
```   
new webpack.DefinePlugin({
               'process.env.NODE_ENV': JSON.stringify('development')
           })
```
process.env 这是 nodejs 范畴。
 
当利用 webpack 编译的时候，webpack 会检测利用插件定义的全局变量，编译不同的内容。

编译后查看app.bundle.js里的内容，复制部分编译后的代码。已经没有 if 语句`process.env.NODE_ENV === 'production'`，直接输出了if 里面的内容
``` 
 var e, u, i = r(0), o = r.n(i);
    console.log("aaaaaaa:", "production"), console.log("ssssssssssssssssssssssss", "production"), document.body.appendChild((e = document.createElement("div"), u = document.createElement("button"), e.innerHTML = o.a.join(["Hello", "webpack"], " "), u.innerHTML = "Click me and check the console!", u.onclick = function () {
        console.error("I get called from print.js!")
    }, e.appendChild(u), e))
```