const { createServer } = require('http');

createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('<h1>Hello</h1>');
}).listen(3000, '127.0.0.1');
