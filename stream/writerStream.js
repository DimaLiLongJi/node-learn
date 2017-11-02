let fs = require('fs');

let data = '谁是你爸爸?';

// 创建写入流
let writerStream = fs.createWriteStream('output.txt');

// UTF-8写入
writerStream.write(data, 'UTF8');

// 标记写入流结束
writerStream.end();

// 写入流事件： data end error
writerStream.on('data', (data2) => {
  console.log('写入data', data2); // nothing
});

// 验证
let readerStream = fs.createReadStream('output.txt');
let datawrapper = '';
readerStream.setEncoding('UTF8');
readerStream.on('data', (data) => {
  datawrapper += data;
});
readerStream.on('end', () => {
  console.log(datawrapper);
})
