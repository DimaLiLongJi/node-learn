const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index.html', (req, res) => {
  console.log('__dirname', __dirname);
  res.sendFile(`__dirname/index.html`); // res.sendFile 请求返回一个文件
});

app.post('/post', urlencodedParser, (req, res) => {
  const data = {
    'firstName': req.body.firstName,
    'lastName': req.body.lastName,
  };
  console.log('name', data);
  res.send(JSON.stringify(data));
});

const service = app.listen(4000, () => {
  const host = service.address().address;
  const port = service.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});


// 讲解
// express的 post 需要引入bodyParser
// 设置const urlencodedParser = bodyParser.urlencoded({ extended: false }) 编码解析
// 然后 app.post('/',urlencodedParser,function(){});
