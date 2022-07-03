const { createServer } = require('http');

const server = createServer();

server.on('request', (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>Hello</h1>');
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h1>Not found</h1>');
  }
});

server.listen(3000, 'localhost');
