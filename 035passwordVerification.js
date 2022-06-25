const { pbkdf2 } = require('crypto');

const pwd = process.argv[2];

const SALT = 'ADM@hih453hids jijfe /.43w5%$^$Dfxguhftesrhsdgf%$6T%esdtx5t546$#%#$^rdfg5.';

pbkdf2(pwd, SALT, 1000000, 64, 'sha512', (err, derivedKey) => {
  if (err) {
    console.error('Error', err);
  } else if (derivedKey.toString('hex') === '0857b11cfa8ab200cc56d7aa3e60e51cf20f7f5eb6326995f5086e8826ecbc4f27c98f0a67a5206eb998448183d359794ded765d74a76232f13a4f6e1a3ab771') {
    console.log('Logged in!');
  } else {
    console.log('Access denied.');
  }
});