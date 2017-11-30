const express = require('express');
const app = express();
const fs = require('fs');


const user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
};

app.get('/list', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, data) => {
    console.log(data);
    res.end(data);
  })
});

app.get('/addUser', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, data) => {
    console.log('data', data);
    data = JSON.parse(data);
    data.user4 = user.user4;
    res.end(JSON.stringify(data));
  })
});

app.get('/list/:id', (req, res) => {
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  fs.readFile(`${__dirname}/data.json`, (err, data) => {
    data = JSON.parse(data);
    let id = req.params.id; // req.params 为 /1 req.query为 ？id=XXX
    let user = data[`user${id}`];
    if (!user) {
      res.write('数据库暂时没有该人');
      res.end();
      return;
    }
    console.log('user', user);
    res.end(JSON.stringify(user));
  })
});


app.get('/deleteUser', (req, res) => {
  console.log(111);
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  if (!req.query.id) {
    res.write('你要删谁啊？');
    res.end();
    return;
  }
  let id = req.query.id;
  fs.readFile(`${__dirname}/data.json`, (err, data) => {
    data = JSON.parse(data);
    if (!data[`user${id}`]) {
      res.write('数据库暂时没有该人');
      res.end();
      return;
    }
    delete data[`user${id}`];
    console.log('data', data);
    res.end( JSON.stringify(data));
  })
});

const server = app.listen(4000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
