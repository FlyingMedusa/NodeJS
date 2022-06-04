// do NOT use this approach
const { access } = require('fs').promises;
const { W_OK } = require('fs').constants;

const FILE_NAME = './data/hello-world.txt';

(async () => {
  try {
    await access(FILE_NAME, W_OK);
  } catch (error) {
    console.log('File is not valid!');
  }
})();
