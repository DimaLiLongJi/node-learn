const path = require('path');

// 格式化路径
console.log('normalization',path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 链接路径
console.log('join',path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换绝对路径
console.log('resolve',path.resolve('app,js'));

// 后转名
console.log('ext name',path.extname('app.js'));
