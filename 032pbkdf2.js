const { pbkdf2 } = require('crypto');

const originalText = 'Hello World by Martha';
const salt = 'ADM@hih453hids jijfe /.43w5%$^$Dfxguhftesrhsdgf%$6T%esdtx5t546$#%#$^rdfg5.';

pbkdf2(originalText, salt, 1000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));
});
