const { rename } = require('fs').promises;

(async () => {
  try {
    await rename('./data/mm/mega k', './data/mm/mega k2');
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('The given file name does not exist.');
    } else {
      console.log('Oh no!', e);
    }
  }
})();
