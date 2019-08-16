##Build

```$xslt
npm install
npm run build
```
require.resolve  

输出一个绝对路径，例子 node/test.js

多了
```
  module:{
        rules:[
            {
                test:require.resolve('./src/index.js'),
                use: 'imports-loader?this=>window'
            }
        ]
    },
```
这样可以使 index.js里面使用alert