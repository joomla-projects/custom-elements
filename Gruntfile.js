module.exports = function (grunt) {
	if (grunt.file.exists('settings-custom.yaml')) {
		// We have a custom setup
		var settings = grunt.file.readYAML('settings-custom.yaml');
		console.log('Custom settings supplied')
	} else {
		// We will use the default options
		var settings = grunt.file.readYAML('settings.yaml');
	}

	// Load required modules
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-copy');

	var fs = require('fs');
	var deleteFolderRecursive = function (path) {
		if (fs.existsSync(path)) {
			fs.readdirSync(path).forEach(function (file, index) {
				var curPath = path + "/" + file;
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
	grunt.registerTask('patchCE', 'Patch Custom Elements Polyfill', function () {
		// Patch the Custom Element polyfill
		if (grunt.file.exists('dist/polyfills/webcomponents-ce.min.js')) {
			var ce = grunt.file.read('dist/polyfills/webcomponents-ce.min.js');
			ce = ce +
`(function(){
	window.WebComponents = window.WebComponents || {};
	requestAnimationFrame(function() {
		window.WebComponents.ready= true;
		document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles:true }) );
	})
})();`;

			grunt.file.write('dist/polyfills/webcomponents-ce.min.js', ce);
		}
	});

	// Compile the css
	grunt.registerTask('compile', 'Compile css files', function() {
		// Compile the css files
		var compileCss = function (element) {
			grunt.config.set('sass.' + element + '.files', [{
				src: 'elements/' + element + '/' + element + '.scss',
				dest: 'dist/css/' + element + '.css'
			}]);

			grunt.task.run('sass:' + element);

			grunt.config.set('cssmin.' + element + '.files', [{
				src: 'dist/css/' + element + '.css',
				dest: 'dist/css/' + settings.prefix + '-' + element + '.min.css'
			}]);

			grunt.task.run('cssmin:' + element);
		};

		console.info('Build the stylesheets')
		settings.elements.forEach(function (element) {
			// Create the css for each element
			compileCss(element);
		});
	});

	// Create the Custom Elements
	grunt.registerTask('createElements', 'Create the Custom Elemets', function() {
		// Create the custom element
		var createElement = function (element, settings) {
			var tmpJs = '', tmpJsPlain = '', tmpCss = '';

			if (grunt.file.exists('elements/' + element + '/' + element + '.js')) {
				tmpJs = grunt.file.read('elements/' + element + '/' + element + '.js');

				// Embed the css in the custom element
				if (grunt.file.exists('dist/css/' + settings.prefix + '-' + element + '.min.css')) {
					tmpCss = grunt.file.read('dist/css/' + settings.prefix + '-' + element + '.min.css');
				}
				console.info('dist/css/' + settings.prefix + '-' + element + '.min.css')

				// Repeat
				tmpJs = grunt.file.read('elements/' + element + '/' + element + '.js');
				tmpJs = tmpJs.replace(/{{REGISTERELEMENT}}/g, settings.prefix + '-' + element);
				tmpJs = tmpJs.replace(/joomla-/g, settings.prefix + '-');
				tmpJs = tmpJs.replace(/'{{stylesheet}}'/g, '"' + tmpCss + '"');

				grunt.file.write('elements/' + element + '/' + element + '_es6.js', tmpJs);

				// Browserify the ES5 Element
				grunt.config.set('browserify.options', {
					"transform": [
						[
							"babelify",
							{
								"presets": [
									"es2015",
									"babili"
								],
								"plugins": [
									"static-fs"
								]
							}
						]
					]
				});

				// As custom elements (plain Js and css)
				grunt.config.set('browserify.' + element + '.files', [{
					dest: 'dist/js/' + settings.prefix + '-' + element + '.js',
					src: 'elements/' + element + '/' + element + '_es6.js',
				}]);

				grunt.task.run('browserify:' + element);

				// Uglify the scripts
				grunt.config.set('uglify.' + element + '-js' + '.files', [{
					src: ['dist/js/' + settings.prefix + '-' + element + '.js', '!dist/js/' + settings.prefix + '-' + element + '.min.js'],
					dest: '',
					ext: '-es5.min.js',
					expand: true
				}]);

				grunt.task.run('uglify:' + element + '-js');

				// Put an ES6 copy in the dist folder
				grunt.config.set('copy.' + element + '-es6' + '.files', [{
					src: 'elements/' + element + '/' + element + '_es6.js',
					dest: 'dist/js/' + settings.prefix + '-' + element + '-es6.js'
				}]);

				grunt.task.run('copy:' + element + '-es6');

				// Uglify the ES6 script
				grunt.config.set('uglify.' + element + '-es6' + '.files', [{
					src: ['dist/js/' + settings.prefix + '-' + element + '-es6.js', '!dist/js/' + settings.prefix + '-' + element + '-es6.min.js'],
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

		console.info('Build the custom Elements')
		settings.elements.forEach(function (element) {
			// Create elements as html files, compatible with document-register-element polyfill
			createElement(element, settings);

		});
	});

	grunt.registerTask('polyfills', 'Create a copy of the polyfills', function() {
		// Copy polyfills in dist and demo folders
		if (grunt.file.exists('node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')) {
			var polyfills = ['webcomponents-hi-ce', 'webcomponents-hi-sd-ce', 'webcomponents-hi', 'webcomponents-lite', 'webcomponents-loader', 'webcomponents-sd-ce'];

			polyfills.forEach(function (polyfill, item) {
				// Put a copy of webcomponentjs polyfills in the dist folder
				grunt.config.set('copy.' + polyfill + '.files', [{
					src: 'node_modules/@webcomponents/webcomponentsjs/' + polyfill + '.js',
					dest: 'dist/polyfills/' + polyfill + '.js'
				}]);

				grunt.task.run('copy:' + polyfill);

				// Put a copy of wc-loader, the Joomla default web components loader
				grunt.config.set('copy.wc.files', [{
					src: 'elements/wc-loader.js',
					dest: 'dist/polyfills/wc-loader.js'
				}]);

				grunt.task.run('copy:wc');
			})

			// Copy the Custom Elements polyfill
			grunt.config.set('copy.ce.files', [{
				src: 'node_modules/@webcomponents/custom-elements/custom-elements.min.js',
				dest: 'dist/polyfills/webcomponents-ce.min.js'
			}]);

			grunt.task.run('copy:ce');

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
	grunt.registerTask('clearFiles', 'Clean up', function () {

		// Remove the minified/non minified css
		deleteFolderRecursive('dist/css')

		settings.elements.forEach(function (element) {
			// Remove the extracripts
			if (grunt.file.exists('elements/' + element + '/' + element + '_es6.js')) {
				grunt.file.delete('elements/' + element + '/' + element + '_es6.js');
			}
			if (grunt.file.exists('dist/js/' + settings.prefix + '-' + element + '-es6.js')) {
				grunt.file.delete('dist/js/' + settings.prefix + '-' + element + '-es6.js');
			}
			if (grunt.file.exists('dist/js/' + settings.prefix + '-' + element + '-es6.min.js')) {
				grunt.file.delete('dist/js/' + settings.prefix + '-' + element + '-es6.min.js');
			}
			if (grunt.file.exists('dist/js/' + settings.prefix + '-' + element + '.js')) {
				grunt.file.delete('dist/js/' + settings.prefix + '-' + element + '.js');
			}
		});
	});

	// Copy files to the docs and demo foders
	grunt.registerTask('copyDist', 'Copy the distribution files to docs and demo', function() {

		//{ expand: true, cwd: '<%= folder.node_module %>jquery/dist/', src: ['*', '!(core.js)'], dest: 'media/vendor/jquery/js/', filter: 'isFile'},
		// Put a copy in the demo folder
		grunt.config.set('copy.dist.files', [{
			expand: true,
			filter: 'isFile',
			cwd: 'dist/js/',
			src: ['*'],
			dest: 'demo/js/'
		}]);

		grunt.task.run('copy:dist');

		// Put a copy in the docs folder
		grunt.config.set('copy.docs.files', [{
			expand: true,
			filter: 'isFile',
			cwd: 'dist/js/',
			src: ['*'],
			dest: 'docs/_media/js/'
		}]);

		grunt.task.run('copy:docs');
	});

	// Patch the loader afterminification
	grunt.registerTask('minifiedLoaderPatch', 'Create Html version of the elements', function () {

		if (grunt.file.exists('dist/polyfills/wc-loader.min.js')) {
			var tmpPatch = grunt.file.read('dist/polyfills/wc-loader.min.js');
			tmpPatch = tmpPatch.replace(/wc-loader.js/g, 'wc-loader.min.js');
			grunt.file.write('dist/polyfills/wc-loader.min.js', tmpPatch);
		}
	});

	grunt.registerTask('default', function () {
		String.prototype.capitalizeFirstLetter = function () {
			return this.charAt(0).toUpperCase() + this.slice(1);
		}

		// Clear the polyfills folder
		deleteFolderRecursive('dist/polyfills');
		deleteFolderRecursive('dist/js');
		deleteFolderRecursive('dist/css');

		// Create the css files
		grunt.task.run('compile');

		// Create the polyfills
		grunt.task.run('polyfills');

		// Create the elements
		grunt.task.run('createElements');

		// Fix the loader script
		grunt.task.run('minifiedLoaderPatch');

		// Do the clean up
		grunt.task.run('clearFiles');

		// Copy files to docs and demo
		grunt.task.run('copyDist');
	});
};
