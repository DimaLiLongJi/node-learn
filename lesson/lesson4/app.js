const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const eventproxy = require('eventproxy');
const url = require('url');

const app = express();
const ep = new eventproxy();
const url = 'https://cnodejs.org/';

superagent.get(url).end((err, res) => {
  if (err) {
    return console.error(err);
  }
  let topicUrls = [];
  const $ = cheerio.load(res.text);

  $('#topic_list .topic_title').each((idx, element) => {
      let $element = $(element);
      let href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
  });

  const ep = new eventproxy();

  ep.after('topic_html', topicUrls.length, (topics) => {
    topics = topics.map((topicPair) => {

    })
  })
})
