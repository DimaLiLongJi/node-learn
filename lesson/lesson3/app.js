const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');

const app = express();
const url = 'https://cnodejs.org/';

app.get('/pachong', (req, res) => {
  superagent.get(url).end((err, sres) => {
    if (err) return console.log(err);
    // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
    // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
    // 剩下就都是 jquery 的内容了
    const $ = cheerio.load(sres.text);
    let items = [];
    $('#topic_list .topic_title').each((index, ele) => {
      let $ele = $(ele);
      items.push({
        title: $ele.attr('title'),
        href: $ele.attr('href'),
      });
    });
    $('.user_avatar img').each((index, ele) => {
      let $ele = $(ele);
      items[index].author = $ele.attr('title');
    });
    res.send(items);
  })
})

const server = app.listen(4000, () => {
  const host = server.address().host;
  const port = server.address().port;
});
