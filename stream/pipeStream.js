const fs = require('fs');
// 创建可读可写流
let readerStream = fs.createReadStream('info.txt');
let writerStream = fs.createWriteStream('output.txt');

// 管道读写
readerStream.pipe(writerStream);
