const { readdir, stat } = require('fs').promises;

async function readFilesAndDirectories() {
  const fileNames = await readdir('.');

  for (const fileName of fileNames) {
    console.log(fileName);

    const fileStat = await stat(`./${fileName}`);
    console.log(fileStat.isFile());
  }
}

readFilesAndDirectories();
