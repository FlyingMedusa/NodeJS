// METHOD 1

// const { lookup } = require('dns');
//
// lookup('google.com', (err, address, family) => {
//   if (err === null) {
//     console.log('address: ', address, 'family: ', family);
//   } else {
//     console.log('Oh noo', err);
//   }
// });

// METHOD 2

// const { lookup } = require('dns');
// const { promisify } = require('util');
//
// const dnsPromisify = promisify(lookup);
// dnsPromisify('google.com')
//   .then(({ address, family }) => {
//     console.log('address: ', address, 'family: ', family);
//   })
//   .catch((error) => {
//     console.log('Oh noo', error);
//   });

// METHOD 3

const { lookup } = require('dns');
const { promisify } = require('util');

(async () => {
  try {
    const { address, family } = await promisify(lookup)('google.com');
    console.log('address: ', address, 'family: ', family);
  } catch (err) {
    console.log('Oh noo', err);
  }
})();
