const { exec } = require('child_process');

exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error('Oh no!', error);
  } else if (stderr) {
    console.error('Error in the app!', stderr);
  } else {
    console.log('The program has finished!\n', stdout);
  }
});