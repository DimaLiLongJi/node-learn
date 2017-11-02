const url = require('url');
const querystring = require('querystring');

const urlString =
  'http://user:pass@host.com:8080/path?query=string&name=lilongji#hash';

let result = url.parse(urlString);
// let resultQuery = result.query;
// console.log(querystring.parse(url.parse(urlString).query));
// console.log(result);
// 结果
// {
//   protocol: 'http:',
//   slashes: true,
//   auth: 'user:pass',
//   host: 'host.com:8080',
//   port: '8080',
//   hostname: 'host.com',
//   hash: '#hash',
//   search: '?query=string&name=lilongji',
//   query: 'query=string&name=lilongji',
//   pathname: '/path',
//   path: '/path?query=string&name=lilongji',
//   href: 'http://user:pass@host.com:8080/path?query=string&name=lilongji#hash'
// }
////////////////////////////////////////////


const obj = {
  name: 'lilongji',
  sex: 'male',
  age: 25,
};
let objstring = querystring.stringify(obj);
// console.log(objstring); // name=lilongji&sex=male&age=25
let objparse = querystring.parse(objstring);
// console.log(objparse);
// {
// name: 'lilongji',
//   sex: 'male',
//   age: '25'
// }
