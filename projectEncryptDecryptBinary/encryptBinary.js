const { readFile, writeFile } = require('fs').promises;
const { encryptBinary, hash } = require('./cipherBinary');
const { ENCRYPTED_SALT, HASH_SALT } = require('./constants');

const [,, fileName, pwd] = process.argv;

(async () => {
  const content = await readFile(fileName);
  const contentHash = hash(content, HASH_SALT);
  const encrypted = await encryptBinary(content, pwd, ENCRYPTED_SALT);
  encrypted.hash = contentHash;
  await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
  console.log('Done.');
})();
