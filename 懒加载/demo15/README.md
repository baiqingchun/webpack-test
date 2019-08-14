##Build

```$xslt
npm install
npm run build
```
filename：对应于entry里面生成出来的文件名

chunkFilename：chunkname就是未被列在entry中，异步加载模块时会用到这个。

`import(/* webpackChunkName: "print" */ './print')`
webpackChunkName的意思是定义一个打包后的名字，结合chunkFilename使用。webpack打包后为 print.bundle.js


此处也可以不用，那么打包后文件是1.bundle.js.

