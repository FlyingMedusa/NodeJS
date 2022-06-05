const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { createDecipheriv } = require('crypto');

const algorithm = 'aes-192-cbc'; // AES 192
const password = 'Password used to generate key';
const encrypted = '772580c41f9b9fe05acd319bafc782c3f9a740779a11eea0bc03bbaf07c56b4b';
const ivHex = '0f2600748b496a1e2338167a23a47973';

(async () => {
  const key = await scrypt(password, 'salt', 24);
  const iv = Buffer.from(ivHex, 'hex'); // Initialization vector

  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  console.log(decrypted);
})();
