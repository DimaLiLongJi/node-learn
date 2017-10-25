var express = require('express');
var app = express();
var superagent = require('superagent');
var cheerio = require('cheerio');

app.get('/pachong', function(req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  superagent.get('https://cnodejs.org/')
    .end(function(err, sres) {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
      // 剩下就都是 jquery 的内容了
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .topic_title').each(function(idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: 'http://cnodejs.org' + $element.attr('href'),
        });
      });
      $('#topic_list .user_avatars img').each((idx, element) => {
        var $element = $(element);
        items[idx].author = $element.attr('title');
      })
      res.send(items);
      // res.send(sres.text)
    });
});
app.listen(4000, function(req, res) {
    console.log('app is running at port 4000');
  })
  // let express = require('express');
  // let app = express();
  // let superagent = require('superagent');
  // let cheerio = require('cheerio');
  //
  // app.get('/pachong', (req, res, next) => {
  //   superagent.get('https://cnodejs.org/').end((err, sres) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     let $ = cheerio.load(sres.text);
  //     let items = [];
  //     $('#topic_list .topic_title').each((index, ele) => {
  //       let $ele = $(ele);
  //       items.push({
  //         title: $ele.attr('title'),
  //         href: 'http://cnodejs.org' + $ele.attr('href'),
  //       })
  //     });
  //     $('#topic_list .user_avatar img').each((idx, element) => {
  //       var $ele = $(element);
  //       items[idx].author = $ele.attr('title');
  //     })
  //     res.send(items);
  //   })
  // });
  //
  // app.listen(4000, (req, res) => {
  //   console.log('req', req);
  //   console.log('res', res);
  // })
