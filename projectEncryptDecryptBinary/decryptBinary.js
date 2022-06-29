const { readFile, writeFile } = require('fs').promises;
const { decryptBinary } = require('./cipherBinary');
const { ENCRYPTED_SALT } = require('./constants');

const [,, fileName, pwd] = process.argv;

(async () => {
  const json = await readFile(fileName, 'utf8');
  const encrypted = JSON.parse(json);
  const decrypted = await decryptBinary(encrypted.encrypted, pwd, ENCRYPTED_SALT, encrypted.iv);

  await writeFile(fileName, decrypted, 'binary');
})();
