##Build
运行下面的命令，webpack 会去查找 webpack.config.js ，根据配置文件生成bundle.js
```$xslt
npm install
npx webpack
```
##path
配置文件使用的下面的代码，是 nodejs 的范畴，可以查看nodejs 的 path

```const path = require('path');```

`path.resolve(__dirname,'dist')`

path.resolve(),把一个路径或路径片段的序列解析为一个绝对路径。
从右向左开始查找，找到根目录`/`，直到构造完成一个绝对路径。
```$xslt
console.log(path.resolve('__dirname', '/abc', 'lll'))
//输出：'/abc/lll'
```
```$xslt
console.log(path.resolve('__dirname', 'abc', 'lll'))
//输出：/Users/baiqingchun/code/study/webpack4/webpack-test/demo3/node/__dirname/abc/lll
```

详情查看，node文件下的 test.js,运行命令`node test.js`,查看输出。
