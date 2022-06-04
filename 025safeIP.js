const { promisify } = require('util');

const exec = promisify(require('child_process').exec);

(async () => {
  const ip = process.argv[2].replace(/[^0-9.]+/g, '');
  try {
    const { stdout } = await exec(`ping ${ip}`, {
      timeout: 1000 * 60,
    });
    console.log(stdout);
  } catch (e) {
    console.log('Oh no', e.stdout);
  }
})();
