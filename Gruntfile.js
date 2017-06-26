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
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Cleanup process
	grunt.registerTask('clearFiles', 'Clean up', function () {
		settings.elements.forEach(function (element) {
			// Remove the non minified css
			if (grunt.file.exists("dist/css/" + element + ".css")) {
				grunt.file.delete("dist/css/" + element + ".css");
			}
			if (grunt.file.exists('elements/' + element + '/' + element + '_es6.js')) {
				grunt.file.delete('elements/' + element + '/' + element + '_es6.js');
			}
		});
	});

	// Create WebComponents elements
	grunt.registerTask('createHtml', 'Create Html version of the elements', function () {
		settings.elements.forEach(function (element) {

			if (grunt.file.exists('dist/js/' + element + '.min.js')) {
				// Compose the element as .html
				var tmpOutput = '<element name="' + settings.prefix + '-' + element + '">';
					tmpJs = grunt.file.read('dist/js/' + element + '.min.js');
					tmpOutput += '<script>' + tmpJs + '</script>';
					tmpOutput += '</element>';

				// Write the Custom element
				grunt.file.write('dist/html/' + settings.prefix + '-' + element + '.html', tmpOutput);
			}
		});
	});

	grunt.registerTask('default', function () {
		String.prototype.capitalizeFirstLetter = function () {
			return this.charAt(0).toUpperCase() + this.slice(1);
		}

		// Compile the css files
		var compileCss = function(element) {
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

			// Put a copy in the demo folder
			grunt.config.set('copy.' + element + '-css-s' + '.files', [{
				src: 'dist/css/' + settings.prefix + '-' + element + '.min.css',
				dest: 'demo/css/' + settings.prefix + '-' + element + '.min.css'
			}]);

			grunt.task.run('copy:' + element + '-css-s');

			// Put a copy in the demo folder
			grunt.config.set('copy.' + element + '-css' + '.files', [{
				src: 'dist/css/' + settings.prefix + '-' + element + '.min.css',
				dest: 'docs/_media/css/' + settings.prefix + '-' + element + '.min.css'
			}]);

			grunt.task.run('copy:' + element + '-css');
		};

		// Create the custom element
		var createElement = function(element, settings) {
			var tmpJs = '', tmpJsPlain = '';

			if (grunt.file.exists('elements/' + element + '/' + element + '.js')) {
				tmpJs = grunt.file.read('elements/' + element + '/' + element + '.js');

				// Repeat
				tmpJs = grunt.file.read('elements/' + element + '/' + element + '.js');
				tmpJs = tmpJs.replace(/{{REGISTERELEMENT}}/g, settings.prefix + '-' + element);
				tmpJs = tmpJs.replace(/joomla-/g, settings.prefix + '-');
				grunt.file.write('elements/' + element + '/' + element + '_es6.js', tmpJs);

				// // As Web components (with shadow dom)
				// grunt.config.set('shell.' + element, {
				// 	command: 'browserify elements/' + element + '/' + element + '_a.js -o dist/js/' + element + '.min.js'
				// });

				// grunt.task.run('shell:' + element);

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
					ext: '.min.js',
					expand: true
				}]);

				grunt.task.run('uglify:' + element + '-js');

				// Put a copy in the demo folder
				grunt.config.set('copy.' + element + '-js-a' + '.files', [{
					src: 'dist/js/' + settings.prefix + '-' + element + '.min.js',
					dest: 'demo/js/' + settings.prefix + '-' + element + '.min.js'
				}]);

				grunt.task.run('copy:' + element + '-js-a');

				// Put a copy in the docs folder
				grunt.config.set('copy.' + element + '-js' + '.files', [{
					src: 'dist/js/' + settings.prefix + '-' + element + '.min.js',
					dest: 'docs/_media/js/' + settings.prefix + '-' + element + '.min.js'
				}]);

				grunt.task.run('copy:' + element + '-js');
			}
		};

		console.log('Build the custom Elements')
		settings.elements.forEach(function (element) {
			// Create the css for each element
			compileCss(element);

			// Create elements as html files, compatible with document-register-element polyfill
			createElement(element, settings);

		});

		// Create elements as html files
		// grunt.task.run('createHtml');

		// Copy polyfills in dist and demo folders
		if (grunt.file.exists('node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')) {
			var tmpPloyfillJs = grunt.file.read('node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js');

			tmpPloyfillJs = tmpPloyfillJs.replace(/\(function \(\) {\n'use strict';\n\n/, '')
				.replace(/(\n\n\/\*(?:(?!\*\/).|[\n])*\*\/\s\n}\(\)\);\n)/g, '').replace(/\;$/, '');

			if (grunt.file.exists('elements/wc-loader.js')) {
				var polyfill = grunt.file.read('elements/wc-loader.js');

				polyfill = polyfill.replace('{{POLYFILL_JS}}', tmpPloyfillJs);

				grunt.file.write('dist/polyfills/wc-loader.js', polyfill);
			}

var polyfills = ['webcomponents-hi-ce', 'webcomponents-hi-sd-ce', 'webcomponents-hi', 'webcomponents-lite', 'webcomponents-loader', 'webcomponents-sd-ce'];

polyfills.forEach(function(polyfill, item) {
			// Put a copy of webcomponentjs polyfills in the dist folder
			grunt.config.set('copy.' + item + '.files', [{
				src: 'node_modules/@webcomponents/webcomponentsjs/' + polyfill + '.js',
				dest: 'dist/polyfills/' + polyfill + '.js'
			}]);

			grunt.task.run('copy:' + item);
})


			// Uglify the polyfills
			grunt.config.set('uglify.polyfills-js.files', [{
				src: ['!dist/polyfills/*.min.js', 'dist/polyfills/*.js'],
				dest: '',
				ext: '.min.js',
				expand: true
			}]);

			grunt.task.run('uglify:polyfills-js');
		}

		// Do the clean up
		grunt.task.run('clearFiles');
	});
};
