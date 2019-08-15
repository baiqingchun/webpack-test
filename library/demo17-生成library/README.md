build 
```
npm install 
npm run build
```
在 dist 文件下生成的 library 便是打包的库文件。可以在别的项目中引用。

例子如：demo18-应用

发布
注册npm账号
修改package.json文件的入口，修改为："main": "./dist/library.js"
运行npm adduser添加账户名称
运行npm publish命令进行发布
运行npm install xxx来进行安装
