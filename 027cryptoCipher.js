const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');

const algorithm = 'aes-192-cbc'; // AES 192
const password = 'Password used to generate key';

(async () => {
  // salt - best long and complex
  // aes 192 - 24 bytes
  const key = await scrypt(password, 'salt', 24);
  const iv = await randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update('Some clear text data!', 'utf8', 'hex');
  encrypted += cipher.final('hex');

  console.log({
    encrypted,
    iv: iv.toString('hex'),
  });
})();