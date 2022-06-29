const { createReadStream, createWriteStream } = require('fs');

const r = createReadStream('img.webp');
const w = createWriteStream('img2.webp');

r.pipe(w);
r.on('end', () => console.log('Ready'));