const { basename, join } = require('path');

const myDirPath = 'C:\\martaS\\Documents';

console.log(__dirname);
console.log(__filename);
console.log(basename(__filename));
console.log(basename(myDirPath));

const fullPath = join(__dirname, process.argv[2]);
console.log(fullPath);
