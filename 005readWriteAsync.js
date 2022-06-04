const { appendFile, readFile } = require('fs').promises;

const FILE_NAME = './data/hello.txt';

(async () => {
  try {
    const numsFromFile = (await readFile(FILE_NAME, 'utf8')).split('\n');
    const lastNumFromFile = numsFromFile[numsFromFile.length - 1];
    await appendFile(FILE_NAME, `\n${lastNumFromFile * 2}`, 'utf8');
  } catch (error) {
    console.log('Oh noooo', error);
  }
})();
