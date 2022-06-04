const { readFile, writeFile } = require('fs').promises;

const FILE_NAME = './data/input1.json';

(async () => {
  try {
    const listJson = await readFile(FILE_NAME, 'utf8');
    const list = JSON.parse(listJson);
    let sum = 0;
    for (number of list) {
      sum += number;
    }

    await writeFile('./data/sum.txt', `${sum}`, 'utf8', (error) => {
      if (!error) {
        console.log('File is saved.');
      } else {
        console.log('Oh nooo', error);
      }
    });
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('The file cannot be found!');
    } else {
      console.log('Unknown error', error);
    }
  }
})();
