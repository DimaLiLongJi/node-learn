const express = require('express');
const app = express();

app.use(express.static('images')); // 可以处理哪些目录下的文件 其实就是设置根目录的位置
// 如果想访问 iamges/1.png 则需要访问 http://localhost:4000/1.png 因为images 已经为根目录了

app.get('/', (req, res) => {
  res.send('use express.static');
});

let service = app.listen(4000, () => {
  const host = service.address().address;
  const port = service.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
