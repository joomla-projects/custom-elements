const fs = require('fs')
const fse = require('fs-extra')
const { deleteFolderRecursive } = require('./helpers')

const distCssFiles = 'dist/css';
const docsCssFiles = 'docs/_media/css';

deleteFolderRecursive(docsCssFiles);

fs.mkdir(docsCssFiles, { recursive: true }, (err) => {
    fse.copy(distCssFiles, docsCssFiles)
        .then(() => {
            console.log('Copied CSS Files');

            fs.copyFile(require.resolve('bootstrap/dist/css/bootstrap.min.css'), 'docs/_media/css/bootstrap.min.css', (err) => {
                if (err) throw err;
                console.log('Bootstrap CSS file copied');
            });

            fs.copyFile(require.resolve('bootstrap/dist/css/bootstrap.min.css.map'), 'docs/_media/css/bootstrap.min.css.map', (err) => {
                if (err) throw err;
                console.log('Bootstrap map CSS file copied');
            });

            fs.copyFile(require.resolve('foundation-sites/dist/css/foundation.min.css'), 'docs/_media/css/foundation.min.css', (err) => {
                if (err) throw err;
                console.log('Foundation CSS file copied');
            });

            fs.copyFile(require.resolve('foundation-sites/dist/css/foundation.min.css.map'), 'docs/_media/css/foundation.min.css.map', (err) => {
                if (err) throw err;
                console.log('Foundation map CSS file copied');
            });

            fs.copyFile(require.resolve('uikit/dist/css/uikit.min.css'), 'docs/_media/css/uikit.min.css', (err) => {
                if (err) throw err;
                console.log('Foundation CSS file copied');
            });
        })
        .catch(err => console.error(err))
});
