const { encryptText, decryptText } = require('./cipher');

const SALT = 'bRST$#fg45SDR443r4$$';

(async () => {
  const encrypted = await encryptText('Zażółć gęślą jaźń', 'Top secret password', SALT);
  console.log(encrypted);

  const decrypted = await decryptText(encrypted.encrypted, 'Top secret password', SALT, encrypted.iv);
  console.log(decrypted);
})();
