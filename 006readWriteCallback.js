const { appendFile, readFile } = require('fs');

const FILE_NAME = './data/hello.txt';

readFile(FILE_NAME, 'utf8', (error, data) => {
  if (error) {
    console.log('Oh nooo', error);
  } else {
    const numberFromFile = Number(data);
    appendFile(FILE_NAME, `${numberFromFile * 2}`, 'utf8', (error) => {
      if (error) {
        console.log('Oh noo', error);
      } else {
        console.log('File is saved.');
      }
    });
  }
});
