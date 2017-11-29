const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser);

app.get('/cookie', (req, res) => {
  if (req.cookies) {
    res.send(req.cookies);
  }
  console.log('cookies', req.cookies);
});

app.listen(4000);
