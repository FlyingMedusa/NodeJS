const { hash, compare } = require('bcrypt');

const originalText = 'Hello World by Martha';

hash(originalText, 15, (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);

    compare(originalText, hash, (err, res) => {
      if (res) {
        console.log('Logged in!');
      } else {
        console.log('Nope!');
      }
    });
  }
});
