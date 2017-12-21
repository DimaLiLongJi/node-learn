# 原生node.js

- 请求

  1. get

    ```
    const http = require('http');
    const url = require('url');
    const util = require('util');
    const os = require('os');
    http.createServer((req, res) => {
    res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
    });
    req.on('data', (data) => {console.log(data)}); // get一般没有请求体
    req.on('end', () => {
    let params = url.parse(req.url).query;
    res.end();
    })
    }).listen(4000);
    ```

  2. post

    ```
    const http = require('http');
    const url = require('url');
    const querystring = require('querystring');
    const util = require('util');
    const postHTML =
    `<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>
    <body>
    <form method="post">网站名： <input name="name"><br>
    网站 URL： <input name="url"><br>
    <input type="submit">
    </form>
    </body></html>`;
    http.createServer((req, res) => {
    let body = '';
    req.on('data', (data) => {
    body += data;
    })；
    req.on('end', () => {
    body = querystring.parse(body);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    if (body.name && body.url) {
    res.write('<br/>');
    res.write("网站URL：" + body.url);
    } else {
    res.write(postHTML);
    }
    res.end();
    })
    }).listen(4000);
    ```

    3.

    - form发送一个post请求，
    - 在req.on('data')事件中累加请求体
    - req.on('end') 触发后，发送response res.write 写进去

## express.js

- 请求

  1. get

    ```
    const express = require('express');
    const app = express();
    app.use(express.static('public')); // 可以直接使用 public下的文件
    app.get('/index', (req, res) => {
    res.sendFile(`${__dirname}/index.html); // 发送一个文件
    });

    app.get('/get', (req, res) => {
    const data = {
    first: req.query.first, // req.query 是 ?xxx=abc&www=efg
    last: req.query.last,
    };
    res.send(JSON.stringify(data));
    });

    const service = app.listen(4000, () => {
    const host = service.address().address;
    const port = service.address().port;
    });
    ```

  2. post

    ```
     const express = require('express');
     const app = express();
     const bodayParser = require('body-parser');
     const urlencodedParser = bodayParser.urlencoded({extended:false}); // 创建 application/x-www-form-urlencoded 编码解析

     app.use(express.static('pubilc'));

     app.post('/post', urlencodedParser, (req, res) => {
       const data = {
        first: req.body.first, // req.body 是请求体
        last: req.body.last,
       };
       res.send(JSON.stringify(data))
     });

     const service = app.listen(4000, () => {
       const host = service.address().address;
       const port = service.address().port;
     });
    ```

- file
  
