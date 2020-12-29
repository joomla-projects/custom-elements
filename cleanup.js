const rimraf = require('rimraf');
const {readdir} = require('fs').promises;

(async () => {
  const folders = await readdir('packages');

  rimraf.sync('docs/_media/js');
  rimraf.sync('docs/_media/css');

  folders.map((folder) => {
    if (['.DS_Store'].includes(folder)) return;
    rimraf.sync(`packages/${folder}/dist`);
  })
})();
