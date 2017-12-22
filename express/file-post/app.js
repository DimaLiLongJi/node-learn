const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer'); // 用于处理 enctype="multipart/form-data" input file。

app.use(express.static('public')); //  可以直接通过/XXX访问文件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image')); // 仅仅设置可以访问的路径下面的文件

app.get('/index', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`); // sendFile 要写死路径 与express.static无关
});

app.post('/fileUpload', (req, res) =>{
  console.log('文件信息', req.files[0]);
  let file = req.files[0];
  let des_file = `${__dirname}/${file.originalname}`;
  fs.readFile(file.path, (err, data) => {
    fs.writeFile(des_file, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        const response = {
          message:'File uploaded successfully',
          filename:file.originalname,
        };
      }
      console.log('response', response);
      res.end(JSON.stringify(response));
    })
  });
});

const server = app.listen(4000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
