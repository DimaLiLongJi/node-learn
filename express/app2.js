const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('首页的get请求');
  res.send('首页')
});

app.get('/first', (req, res) => {
  console.log('this is First');
  res.send(req.path); // 请求的路径
});

app.get('/second', (req, res) => {
  console.log('this is second');
  res.send(req.path);
});

app.listen(4000, () => {
});
