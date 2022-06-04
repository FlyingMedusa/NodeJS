const { promisify } = require('util');

const exec = promisify(require('child_process').exec);

(async () => {
  const chosenProgram = process.argv[2];
  try {
    await exec(chosenProgram);
  } catch (e) {
    console.log('Oh no', e.stdout);
  }
})();