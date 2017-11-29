const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res) => { // 创建服务器
  let pathname = url.parse(req.url).pathName; // 请求解析路径名
  console.log('request from', pathname);

  fs.readFile(path.substr(1))
})
