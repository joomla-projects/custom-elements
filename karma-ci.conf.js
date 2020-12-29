// Karma configuration
module.exports = function (config) {
    // Browsers to run on Sauce Labs
  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 10',
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: 'latest'
    },
  sl_safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: "latest"
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
    },
  };

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'fixture'],

    // list of files / patterns to load in the browser
    files: [
      // polyfill
      {pattern: 'mode_modules/@webreflection/custom-elements-no-builtin', served: true, nocache: true },
      // modules
      {pattern: 'dist/js/joomla-alert.js', type: 'module' },
      {pattern: 'dist/js/joomla-collapse.js', type: 'module' },
      {pattern: 'dist/js/joomla-dropdown.js', type: 'module' },
      {pattern: 'dist/js/joomla-modal.js', type: 'module' },
      {pattern: 'dist/js/joomla-panels.js', type: 'module' },
      {pattern: 'dist/js/joomla-tab.js', type: 'module' },
      {pattern: 'dist/js/joomla-tip.js', type: 'module' },
      // ES5
      {pattern: 'dist/js/joomla-alert-es5.js', nomodule: '' },
      {pattern: 'dist/js/joomla-collapse-es5.js', nomodule: '' },
      {pattern: 'dist/js/joomla-dropdown-es5.js', nomodule: '' },
      {pattern: 'dist/js/joomla-modal-es5.js', nomodule: '' },
      {pattern: 'dist/js/joomla-panels-es5.js', nomodule: '' },
      {pattern: 'dist/js/joomla-tab-es5.js', nomodule: '' },
      {pattern: 'dist/js/joomla-tip-es5.js', nomodule: '' },

      'tests/*/*.js'
    ],

    plugins: [
      'karma-jasmine',
      'karma-fixture',
      'karma-html2js-preprocessor',
    ],

    // web server port
    port: 9899,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    sauceLabs: {
      testName: 'Custom Elements Tests',
    },

    captureTimeout: 120000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['dots', 'saucelabs'],
    singleRun: true
  });
};
