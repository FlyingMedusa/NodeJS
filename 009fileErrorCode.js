const { readFile } = require('fs').promises;

const FILE_NAME = './data/hello-world.txt';

(async () => {
  try {
    const result = await readFile(FILE_NAME, 'utf8');
    console.log(result);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File is not valid!');
    } else {
      console.log('Unknown error', error);
    }
  }
})();
