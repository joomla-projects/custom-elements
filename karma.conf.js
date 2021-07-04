// Karma configuration
module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'fixture'],

    // list of files / patterns to load in the browser
    files: [
      // polyfill
      {pattern: 'node_modules/@webreflection/custom-elements-no-builtin/min.js', served: true, nocache: true },
      // modules
      {pattern: 'packages/alert/dist/js/joomla-alert.js', type: 'module' },
      {pattern: 'packages/collapse/dist/js/joomla-collapse.js', type: 'module' },
      {pattern: 'packages/dropdown/dist/js/joomla-dropdown.js', type: 'module' },
      {pattern: 'packages/modal/dist/js/joomla-modal.js', type: 'module' },
      {pattern: 'packages/panels/dist/js/joomla-panels.js', type: 'module' },
      {pattern: 'packages/tab/dist/js/joomla-tab.js', type: 'module' },
      {pattern: 'packages/tip/dist/js/joomla-tip.js', type: 'module' },
      // ES5
      {pattern: 'packages/alert/dist/js/joomla-alert-es5.js', nomodule: '' },
      {pattern: 'packages/collapse/dist/js/joomla-collapse-es5.js', nomodule: '' },
      {pattern: 'packages/dropdown/dist/js/joomla-dropdown-es5.js', nomodule: '' },
      {pattern: 'packages/modal/dist/js/joomla-modal-es5.js', nomodule: '' },
      {pattern: 'packages/panels/dist/js/joomla-panels-es5.js', nomodule: '' },
      {pattern: 'packages/tab/dist/js/joomla-tab-es5.js', nomodule: '' },
      {pattern: 'packages/tip/dist/js/joomla-tip-es5.js', nomodule: '' },

      { pattern: './tests/**/*.js' },
      { pattern: './tests/**/*.html' },
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    plugins: [
      require('karma-chrome-launcher'),
      'karma-jasmine',
      'karma-fixture',
      'karma-html2js-preprocessor',
    ],

    preprocessors: {
      // 'packags/src/**/js/*.js': ['coverage'],
      'tests/**/*.html': ['html2js'],
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
