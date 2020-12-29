const autoprefixer = require('autoprefixer');
const sass = require('sass');
const pack = require('./../package.json');
const fs = require('fs');
const postcss = require('postcss');
const CleanCSS = require('clean-css');
const fibers = require('fibers')
const path = require('path')
const { deleteFolderRecursive } = require('./helpers')

const settings = pack.settings;
const basePath = 'dist/css/';

// Clean out all old CSS files - helps with any custom element renames or removals etc.
deleteFolderRecursive(basePath)

fs.mkdir(path.join(__dirname, './../', basePath), { recursive: true }, (err) => {
  if (err) {
    throw err
  }

  // Initialise variables used in our loop
  let minifiedCss, src_file, docs_minified_file, dist_file_base, dest_main_file, dest_minified_file;

  settings.elements.forEach(pkg => {
    src_file = 'src/scss/' + pkg + '/' + pkg + '.scss';
    dist_file_base = basePath + settings.prefix + '-' + pkg;
    dest_main_file = dist_file_base + '.css';
    dest_minified_file = dist_file_base + '.min.css';

    const sassOpts = {
      file: src_file,
      fiber: fibers,
      // Force expanded style and we'll minify ourselves afterwards
      outputStyle: 'expanded'
    }

    sass.render(sassOpts, (error, result) => {
      if (error) {
        throw error
      }

      // Reset variable names - I think there's some weird async issue here - TODO: Probably can be cleaned up
      let myNotMinifiedFile = dest_main_file;
      let myMinifiedFile = dest_minified_file;

      postcss([autoprefixer()]).process(result.css, {from: src_file}).then(res => {
        res.warnings().forEach(warn => {
          console.warn(warn.toString())
        })

        fs.writeFile(myNotMinifiedFile, res.css, (err) => {
          if (err) {
            throw err
          }

          console.log(pkg + ' CE CSS file written');
        })

        minifiedCss = new CleanCSS().minify(res.css);

        fs.writeFile(myMinifiedFile, minifiedCss.styles, (err) => {
          if (err) {
            throw err
          }

          console.log(pkg + ' CE minified CSS file written');
        })
      });
    })
  });
});
