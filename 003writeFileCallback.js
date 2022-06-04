const { writeFile } = require('fs');

writeFile('./data/hello.txt', 'Hello, World!', 'utf8', (error) => {
  if (!error) {
    console.log('File is saved.');
  } else {
    console.log('Oh nooo', error);
  }
});
