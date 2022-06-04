const { exec } = require('child_process');

const cp = exec('npm init -y'); // cp = ChildProcess

cp.stdout.on('data', (data) => {
  console.log('Out> ', data);
});

cp.stderr.on('data', (data) => {
  console.log('Error> ', data);
});

cp.on('close', () => {
  console.log('Finished!');
});

// setTimeout(() => {
//   cp.kill('SIGKILL');
// }, 1000);
