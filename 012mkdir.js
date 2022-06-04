const { mkdir } = require('fs').promises;

(async () => {
  await mkdir('./data/mm/mega k', {
    recursive: true,
  });
})();
