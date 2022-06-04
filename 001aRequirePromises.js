const { readFile } = require('fs');
const { promisify } = require('util');

const readFilePromised = promisify(readFile);

(async () => {
  try {
    const data = await readFilePromised('./index.js', 'utf8');
    console.log(data);
  } catch (err) {
    console.log('Ohh nooo', err);
  }
})();