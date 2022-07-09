const { createServer } = require('http');
const { writeFile, readFile } = require('fs').promises;

const server = createServer();
const FILE_NAME = './visits.txt';
let visitsCounter = 0;

(async () => {
  try {
    await readFile(FILE_NAME, 'utf8');
    await writeFile(FILE_NAME, visitsCounter.toString(), 'utf8');
  } catch (error) {
    console.log('An error has ocurred', error);
  }
})();

server.on('request', async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    visitsCounter++;
    await writeFile(FILE_NAME, visitsCounter.toString(), 'utf8');
  }

  const html = await readFile('./index.html', 'utf8');
  res.writeHead(200, {
    'Content-type': 'text/html',
    // 'Content-type': 'application/json'
  });
  res.write(visitsCounter.toString());
  res.end(html);
});

server.listen(3000, 'localhost');
