const { readdir, stat, readFile } = require('fs').promises;

async function myFunc(location) {
  const fileNames = await readdir(location);

  for (const fileName of fileNames) {
    console.log(fileName);

    const fileStat = await stat(`${location}/${fileName}`);
    if (fileStat.isFile() === true) {
      const elContent = await readFile(`${location}/${fileName}`, 'utf-8');
      console.log(elContent);
    }
    if (fileStat.isDirectory() === true) {
      await myFunc(`${location}/${fileName}`);
    }
  }
}

myFunc('./data');
