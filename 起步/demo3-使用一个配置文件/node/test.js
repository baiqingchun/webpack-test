const path = require('path');
console.log(__dirname)
console.log('test',path.resolve(__dirname,'dist'))
console.log(path.resolve('__dirname', '/abc', 'lll'))
console.log(path.resolve('__dirname', 'abc', 'lll'))