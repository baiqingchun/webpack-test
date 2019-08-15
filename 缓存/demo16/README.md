关于缓存讲解，中文网不对，请对照英文网做。
webpack.optimize.CommonsChunkPlugin这个插件已经被改为了config.optimization.splitChunks
##Build

```$xslt
npm install
npm run build
```
manifest： wepack 解析 import export ，转换为 __webpack_require__
Runtime：  runtime会根据 manifest检索出背后对应的模块，这里面还包括在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。

vendors:你的源码会依赖的任何第三方的 library 或 "vendor" 代码。也就是第三方库文件。
