const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;

(async () => {
  const openFileStream = createReadStream('img.webp');
  const writeFileStream = createWriteStream('img2.webp');

  await pipeline(
    openFileStream,
    writeFileStream,
  );

  console.log('Done!');
})();