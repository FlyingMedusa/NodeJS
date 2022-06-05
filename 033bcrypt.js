const { hash } = require('bcrypt');

const originalText = 'Hello World by Martha';

hash(originalText, 15, (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);
  }
});
