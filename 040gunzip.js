const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createGunzip } = require('zlib');

(async () => {
  await pipeline(
    createReadStream('aFile2.json'),
    createGunzip(),
    createWriteStream('aFile3.json'),
  );

  console.log('Done!');
})();
