const http = require('http');
const url = require('url');
const querystring = require('querystring');
const util = require('util');

// http.createServer((req,res) => {
//   let post = ''; // 定义post 保存请求体
//   req.on('data',(data) => { // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
//     post += data;
//   });
//   req.on('end', () => {
//     post = querystring.parse(post);
//     res.end(util.inspect(post));
//   });
// }).listen(4000);

const postHTML =
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer((req,res) => {
  let body = '';
  req.on('data', (data) => {
    body += data;
  });
  console.log('req.url',req.url);
  req.on('end', () => {
    body = querystring.parse(body);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    if(body.name && body.url) {
      res.write('<br/>');
      res.write("网站URL：" + body.url);
    } else {
      res.write(postHTML);
    }
    res.end();
  });
}).listen(4000);
