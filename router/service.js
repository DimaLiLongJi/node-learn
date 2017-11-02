const http = require('http');
const url = require('url');

let start = (router) => {
  function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname;
    router(pathname);
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello World');
    res.end();
    console.log('service has started');
  }
  http.createServer(onRequest).listen(4000);

}

exports.start = start;
// module.exports = start;
