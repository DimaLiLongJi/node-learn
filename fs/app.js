const fs = require('fs');

// 异步读取 fs.readFile(file,(data,err)=>{})
fs.readFile('input.txt', (err, data) => {
  if (err) {
    return console.error(err);
  };
  console.log('异步读取', +data.toString());
});



// console.log('over');

// 异步打开 fs.open(path, flags[, mode], callback)
// path文件路径 flags文件打开行为 mode设置文件模式
// //////////
// r	以读取模式打开文件。如果文件不存在抛出异常。
// r+	以读写模式打开文件。如果文件不存在抛出异常。
// rs	以同步的方式读取文件。
// rs+	以同步的方式读取和写入文件。
// w	以写入模式打开文件，如果文件不存在则创建。
// wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
// w+	以读写模式打开文件，如果文件不存在则创建。
// wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
// a	以追加模式打开文件，如果文件不存在则创建。
// ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
// a+	以读取追加模式打开文件，如果文件不存在则创建。
// ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。

// 读取文件
// fs.stat('input.txt', (err, stats) => {
//   console.log('文件', stats.isFile());
// })

//  写入文件
let data = fs.readFileSync('input.txt'); // 同步读取 fs.readFileSync(file).toString
fs.writeFile('input2.txt', data, (err) => {
  if (err) {
    console.error(err);
  }
});
fs.readFile('input2.txt', (err, data) => {
  console.log("异步读取文件数据: " + data.toString());
});
