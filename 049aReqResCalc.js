const { createServer } = require('http');
const { calc } = require('./049bModuleCalc.js');

const server = createServer();

server.on('request', async (req, res) => {
  const [, operation, num1, num2] = req.url.toString().split('/');
  const result = calc(operation, Number(num1), Number(num2));

  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end(result);
});

server.listen(3000, 'localhost');
