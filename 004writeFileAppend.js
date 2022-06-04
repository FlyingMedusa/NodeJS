const { writeFile } = require('fs').promises;

(async () => {
  try {
    await writeFile('./data/hello.txt', 'me@domain.com\n', {
      encoding: 'utf8',
      flag: 'a',
    });
    console.log('File is saved.');
  } catch (error) {
    console.log('Oh noooo', error);
  }
})();
