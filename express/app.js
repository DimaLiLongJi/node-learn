// 跟express一起安装的几个插件
// $ cnpm install body-parser --save  处理JSON Raw test url的数据
// $ cnpm install cookie-parser --save req.cookies可以取到传过来的cookie 并转化为对象
// $ cnpm install multer --save  enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

const express = require('express');
const app = express();

// res.send 发送 app.get(url，(req,res)) 收到url的请求
app.get('/', (req, res) => {
  res.send('Hellow world');
});

// app.listen(port, ()) 监听端口
// app.listen.address().address / port 监听的地址和端口号
let service = app.listen(4000, () => {
  let host = service.address().address;
  let port = service.address().port;

  console.log('正在监听', host, port);
})

// express 使用request 和 response 处理请求和返回响应数据
// 1. Request 对象
//   req.app：当callback为外部文件时，用req.app访问express的实例
//   req.baseUrl：获取路由当前安装的URL路径
//   req.body / req.cookies：获得「请求主体」/ Cookies
//   req.fresh / req.stale：判断请求是否还「新鲜」
//   req.hostname / req.ip：获取主机名和IP地址
//   req.originalUrl：获取原始请求URL
//   req.params：获取路由的parameters
//   req.path：获取请求路径
//   req.protocol：获取协议类型
//   req.query：获取URL的查询参数串
//   req.route：获取当前匹配的路由
//   req.subdomains：获取子域名
//   req.accepts()：检查可接受的请求的文档类型
//   req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
//   req.get()：获取指定的HTTP请求头
//   req.is()：判断请求头Content-Type的MIME类型
// 2. Response 对象
//   res.app：同req.app一样
//   res.append()：追加指定HTTP头
//   res.set()在res.append()后将重置之前设置的头
//   res.cookie(name，value [，option])：设置Cookie
//   opition: domain / expires / httpOnly / maxAge / path / secure / signed
//   res.clearCookie()：清除Cookie
//   res.download()：传送指定路径的文件
//   res.get()：返回指定的HTTP头
//   res.json()：传送JSON响应
//   res.jsonp()：传送JSONP响应
//   res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
//   res.redirect()：设置响应的Location HTTP头，并且设置状态码302
//   res.send()：传送HTTP响应
//   res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
//   res.set()：设置HTTP头，传入object可以一次设置多个头
//   res.status()：设置HTTP状态码
//   res.type()：设置Content-Type的MIME类型