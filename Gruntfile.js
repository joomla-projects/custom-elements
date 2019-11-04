const sass = require('node-sass');

module.exports = (grunt) => {
  const pack = require('./package.json');
  grunt.settings = pack.settings;

  // Load required modules
  grunt.loadNpmTasks('@lodder/grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  const fs = require('fs');
  const deleteFolderRecursive = (path) => {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file, index) => {
        const curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };

  // Patch the Custom Element Polyfill to add the WebComponentsReady event
  grunt.registerTask('patchCE', 'Patch Custom Elements Polyfill', () => {
    // Patch the Custom Element polyfill
    if (grunt.file.exists('dist/polyfills/webcomponents-ce.js')) {
      let ce = grunt.file.read('dist/polyfills/webcomponents-ce.js');
      ce = ce.replace('//# sourceMappingURL=custom-elements.min.js.map', `
(function(){
	window.WebComponents = window.WebComponents || {};
	requestAnimationFrame(function() {
		window.WebComponents.ready= true;
		document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles:true }) );
	})
})();
//# sourceMappingURL=custom-elements.js.map`);

      grunt.file.write('dist/polyfills/webcomponents-ce.js', ce);
    }
  });

  // Compile the css
  grunt.registerTask('compile', 'Compile css files', () => {
    const compileCss = (element) => {

      grunt.config.set('sass.options', {
        implementation: sass,
      });

      // Compile the css files
      grunt.config.set('sass.' + element + '.files', [{
        src: 'src/scss/' + element + '/' + element + '.scss',
        dest: 'dist/css/' + grunt.settings.prefix + '-' + element + '.css'
      }]);

      grunt.task.run('sass:' + element);

      // Autoprefix the CSS files
      grunt.config.set('postcss.' + element + '.files', [{
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: [
              grunt.settings.browsers,
            ]
          })
        ],
        src: 'dist/css/' + grunt.settings.prefix + '-' + element + '.css',
      }]);

      grunt.task.run('postcss:' + element);

      // Autoprefix the CSS files
      grunt.config.set('cssmin.' + element + '.files', [{
        src: 'dist/css/' + grunt.settings.prefix + '-' + element + '.css',
        dest: 'dist/css/' + grunt.settings.prefix + '-' + element + '.min.css'
      }]);

      grunt.task.run('cssmin:' + element);
    };

    console.info('Build the stylesheets')
    grunt.settings.elements.forEach((element) => {
      // Create the css for each element
      compileCss(element);
    });
  });

  // Create the Custom Elements
  grunt.registerTask('createElements', 'Create the Custom Elemets', () => {
    // Create the custom element
    const createElement = (element, settings) => {
      let tmpJs = '';
      let tmpCss = '';

      if (grunt.file.exists('src/js/' + element + '/' + element + '.js')) {
        // Embed the css in the custom element
        if (grunt.file.exists('src/scss/css/' + element + '.min.css')) {
          tmpCss = grunt.file.read('src/scss/css/' + element + '.min.css');
        }
  
        tmpJs = grunt.file.read('src/js/' + element + '/' + element + '.js');
        tmpJs = tmpJs.replace(/joomla-/g, settings.prefix + '-');
        tmpJs = tmpJs.replace(/'{{stylesheet}}'/g, "`" + tmpCss + "`");

        grunt.file.write('src/js/' + element + '/' + element + '_es6.js', tmpJs);

        // Browserify the ES5 Element
        grunt.config.set('browserify.options', {
          "transform": [
            [
              "babelify",
              {
                "presets": [
                  "@babel/preset-env"
                ],
                "env": {
                  "production": {
                    "presets": ["minify"]
                  }
                },
                "plugins": [
                  "static-fs"
                ]
              }
            ]
          ]
        });

        // As custom elements (plain Js and css)
        grunt.config.set('browserify.' + element + '.files', [{
          dest: 'dist/js/' + settings.prefix + '-' + element + '-es5.js',
          src: 'src/js/' + element + '/' + element + '_es6.js',
        }]);

        grunt.task.run('browserify:' + element);

        // Uglify the scripts
        grunt.config.set('uglify.' + element + '-js' + '.files', [{
          src: ['dist/js/' + settings.prefix + '-' + element + '-es5.js', '!dist/js/' + settings.prefix + '-' + element + '.min.js'],
          dest: '',
          ext: '.min.js',
          expand: true
        }]);

        grunt.task.run('uglify:' + element + '-js');

        // Put an ES6 copy in the dist folder
        grunt.config.set('copy.' + element + '-es6' + '.files', [{
          src: 'src/js/' + element + '/' + element + '_es6.js',
          dest: 'dist/js/' + settings.prefix + '-' + element + '.js'
        }]);

        grunt.task.run('copy:' + element + '-es6');

        // Uglify the ES6 script
        grunt.config.set('uglify.' + element + '-es6' + '.files', [{
          src: ['dist/js/' + settings.prefix + '-' + element + '.js', '!dist/js/' + settings.prefix + '-' + element + '.min.js'],
          dest: '',
          ext: '.min.js',
          expand: true
        }]);

        grunt.task.run('uglify:' + element + '-es6');

        // Put a copy in the demo folder
        grunt.config.set('copy.' + element + '-js-es6' + '.files', [{
          src: 'dist/js/' + settings.prefix + '-' + element + '-es6.min.js',
          dest: 'dist/js/' + settings.prefix + '-' + element + '.min.js'
        }]);

        grunt.task.run('copy:' + element + '-js-es6');
      }
    };

    console.info('Build the custom Elements');
    grunt.settings.elements.forEach((element) => {
      // Create elements as html files, compatible with document-register-element polyfill
      createElement(element, grunt.settings);

    });
  });

  grunt.registerTask('polyfillsDist', 'Create a copy of the polyfills', () => {
    // Copy polyfills in dist and demo folders
    if (grunt.file.exists('node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')) {
      let polyfills = ['webcomponents-hi-ce', 'webcomponents-hi-sd-ce', 'webcomponents-hi', 'webcomponents-lite', 'webcomponents-loader', 'webcomponents-sd-ce'];

      polyfills.forEach((polyfill) => {
        // Put a copy of webcomponentjs polyfills in the dist folder
        grunt.config.set('copy.' + polyfill + '.files', [{
          src: 'node_modules/@webcomponents/webcomponentsjs/' + polyfill + '.js',
          dest: 'dist/polyfills/' + polyfill + '.js'
        }]);

        grunt.task.run('copy:' + polyfill);

        // Put a copy of webcomponentjs polyfills maps in the dist folder
        grunt.config.set('copy.' + polyfill + '-map.files', [{
          src: 'node_modules/@webcomponents/webcomponentsjs/' + polyfill + '.js.map',
          dest: 'dist/polyfills/' + polyfill + '.js.map'
        }]);

        grunt.task.run('copy:' + polyfill + '-map');
      });

      // Copy the Custom Elements polyfill
      grunt.config.set('copy.ce.files', [{
        src: 'node_modules/@webcomponents/custom-elements/custom-elements.min.js',
        dest: 'dist/polyfills/webcomponents-ce.js'
      }]);

      grunt.task.run('copy:ce');

      // Copy the Custom Elements polyfill map
      grunt.config.set('copy.ce-map.files', [{
        src: 'node_modules/@webcomponents/custom-elements/custom-elements.min.js.map',
        dest: 'dist/polyfills/webcomponents-ce.js.map'
      }]);

      grunt.task.run('copy:ce-map');

      grunt.task.run('patchCE');
    }

    // Uglify the polyfills
    grunt.config.set('uglify.polyfills-js.files', [{
      src: ['!dist/polyfills/*.min.js', 'dist/polyfills/*.js'],
      dest: '',
      ext: '.min.js',
      expand: true
    }]);

    grunt.task.run('uglify:polyfills-js');
  });

  // Cleanup process
  grunt.registerTask('clearFiles', 'Clean up', () => {

    // Remove the minified/non minified css
    // deleteFolderRecursive('dist/css');

    grunt.settings.elements.forEach((element) => {
      // Remove the extracripts
      if (grunt.file.exists('src/js/' + element + '/' + element + '_es6.js')) {
        grunt.file.delete('src/js/' + element + '/' + element + '_es6.js');
      }
    });

    if (grunt.file.exists('dist/polyfills/webcomponents-loader.js')) {
      grunt.file.delete('dist/polyfills/webcomponents-loader.js');
    }
    if (grunt.file.exists('dist/polyfills/webcomponents-loader.min.js')) {
      grunt.file.delete('dist/polyfills/webcomponents-loader.min.js');
    }
  });

  // Copy files to the docs and demo foders
  grunt.registerTask('copyDist', 'Copy the distribution files to docs and demo', () => {
    // Put a copy in the docs folder
    grunt.config.set('copy.docscss.files', [{
      expand: true,
      filter: 'isFile',
      cwd: 'dist/css/',
      src: ['*'],
      dest: 'docs/_media/css/'
    }]);

    grunt.task.run('copy:docscss');

    // Put a copy in the docs folder
    grunt.config.set('copy.docsjs.files', [{
      expand: true,
      filter: 'isFile',
      cwd: 'dist/js/',
      src: ['*'],
      dest: 'docs/_media/js/'
    }]);

    grunt.task.run('copy:docsjs');
  });

  grunt.registerTask('elements', () => {
    // Clear the polyfills folder
    // deleteFolderRecursive('dist/polyfills');
    deleteFolderRecursive('dist/css')
    deleteFolderRecursive('dist/js');

    // Create the css files
    grunt.task.run('compile');

    // Create the elements
    grunt.task.run('createElements');

    // Do the clean up
    grunt.task.run('clearFiles');

    // Copy files to docs and demo
    grunt.task.run('copyDist');
  });

  grunt.registerTask('default', ['elements']);

  grunt.registerTask('polyfills', () => {
    // Clear the polyfills folder
    deleteFolderRecursive('dist/polyfills');

    // Create the polyfills
    grunt.task.run('polyfillsDist');
  });
  
  grunt.initConfig({
    watch: {
      src: {
        files: ['src/**/*.js', 'src/scss/**/*.scss'],
        tasks: ['compile'],
      }
    },
  });
};
