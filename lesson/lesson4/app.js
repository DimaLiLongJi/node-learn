const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const eventproxy = require('eventproxy');
const url = require('url');

const app = express();
const ep = new eventproxy();
const cnodeUrl = 'https://cnodejs.org/';

let topicUrls = [];
let topicPairs = [];

superagent.get(cnodeUrl).end((err, res) => {
  if (err) {
    return console.error(err);
  }
  const $ = cheerio.load(res.text);

  $('#topic_list .topic_title').each((idx, element) => { // 先趴下来页面的链接 topicUrls
      let $element = $(element);
      let href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
  });

  const ep = new eventproxy();

  ep.after('topic_html', 3, (topics) => { // 命令ep监听‘topic_html’事件40次 ep.after(事件名， 总次数， (topics) => {});
    // topics 为  ep.emit('topic_html'）40次的pair
    topics = topics.map((topicPair) => {
      // topicPair 为ep.emit('topic_html', [topicUrl, res.text]);第二个参数
      let topicUrl = topicPair[0];
      let topicHTML = topicPair[1];
      let $ = cheerio.load(topicHTML);
      topicPairs.push({
        title: $('.topic_full_title').text().trim(),
        href: topicUrl,
        comment: $('.markdown-text').text().trim(),
      });
      return topicPairs;
      // 返回本次的值
    });

    console.log('finish');
    console.log('topicstopics', topics);
  });

  topicUrls.forEach((topicUrl) => {
    superagent.get(topicUrl).end((err, res) => { // 爬页面里具体的东西
      console.log(`fetch${topicUrl}`);
      ep.emit('topic_html', [topicUrl, res.text]); // 对ep发起自定义事件，判断是否达到次数
    });
  });
});

app.get('/pachong', (req, res) => {
  if (topicUrls.length > 0) {
    const result = {
      topicPairs: topicPairs,
      topicUrls: topicUrls,
    }
    res.send(result);
    return;
  }
  res.send('暂时没爬到');
});

const server = app.listen(4000, () => {
  const host = server.address().host;
  const port = server.address().port;
  console.log(host, port);
})
