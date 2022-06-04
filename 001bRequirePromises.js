const { readFile } = require('fs').promises;

(async () => {
  try {
    const data = await readFile('./index.js', 'utf8');
    console.log(data);
  } catch (err) {
    console.log('Ohh nooo', err);
  }
})();
