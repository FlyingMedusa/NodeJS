const { createHmac } = require('crypto');

const salt = 'ADM@hih453hids jijfe /.43w5%$^$Dfxguhftesrhsdgf%$6T%esdtx5t546$#%#$^rdfg5.';

const hash = createHmac('sha512', salt)
  .update('Hello World by Martha')
  .digest('hex');

console.log(hash);