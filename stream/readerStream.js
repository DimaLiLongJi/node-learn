// read stream
let fs = require('fs');

let data = '';

let readerStream = fs.createReadStream('info.txt'); // 创建可读流
readerStream.setEncoding('UTF8'); // 设置编码为UTF-8
// readerStream处理事件 data->end->and error
readerStream.on('data', (chunk) => {
  data += chunk;
})
readerStream.on('end', () => {
  console.log(data);
})
