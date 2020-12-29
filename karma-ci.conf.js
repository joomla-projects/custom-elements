// Karma configuration
module.exports = function (config) {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.')
    process.exit(1)
  }

    // Browsers to run on Sauce Labs
  const customLaunchers = {
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

      'tests/*/*.js'
    ],

    plugins: [
      'karma-jasmine',
      'karma-fixture',
      'karma-html2js-preprocessor',
    ],

    reporters: ['progress', 'saucelabs'],
    port: 9876,
    colors: true,
    sauceLabs: {
      testName: 'Custom Elements Tests',
      recordScreenshots: false,
      connectOptions: {
        logfile: 'sauce_connect.log'
      },
      public: 'public'
    },
    // Increase timeout in case connection in CI is slow
    captureTimeout: 120000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};
