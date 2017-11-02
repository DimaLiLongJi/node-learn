// 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
const fs = require('fs');
const zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('info.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('info.txt.gz'));

console.log('文件压缩完成');

fs.createReadStream('info.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
console.log('文件解压完成');
