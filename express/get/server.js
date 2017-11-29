const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/get', (req, res) => {
  const data = {
    'first-name': req.query.firstName,
    'last-name': req.query.lastName,
  };
  console.log('data', data);
  res.send(JSON.stringify(data));
});

const server = app.listen(4000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})
