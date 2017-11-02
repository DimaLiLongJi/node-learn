const http = require('http');
const url = require('url');
const util = require('util');
const os = require('os');

http.createServer((req, res) => { // get请求
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  req.on('data', (data) => {
    console.log('get 请求 事件 data');
  });
  req.on('end', () => {
    let params = url.parse(req.url).query;
    console.log('req end事件',params);
    res.end();
  });
  console.log('os type',os.type());
}).listen(4000);
