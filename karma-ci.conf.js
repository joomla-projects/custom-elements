// Browsers to run on Sauce Labs
const customLaunchers = {
  SL_chrome: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
  },
  SL_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox',
    version: 'latest',
  },
  SL_safari: {
    base: 'SauceLabs',
    browserName: 'safari',
    version: 'latest',
  },
  // SL_ie_11: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   browserVersion: '11.285',
  //   platformName: 'Windows 10',
  // },
};

module.exports = (config) => {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.')
    process.exit(1)
  }

  config.set({
    // list of files / patterns to load in the browser
    files: [
      // polyfill
      {pattern: 'node_modules/@webreflection/custom-elements-no-builtin/min.js', served: true, nocache: true },
      // modules
      {pattern: 'dist/js/joomla-alert.js', type: 'module' },
      {pattern: 'dist/js/joomla-collapse.js', type: 'module' },
      {pattern: 'dist/js/joomla-dropdown.js', type: 'module' },
      {pattern: 'dist/js/joomla-modal.js', type: 'module' },
      {pattern: 'dist/js/joomla-panels.js', type: 'module' },
      {pattern: 'dist/js/joomla-tab.js', type: 'module' },
      {pattern: 'dist/js//joomla-tip.js', type: 'module' },
      // ES5
      // {pattern: 'dist/js/joomla-alert-es5.js', nomodule: '' },
      // {pattern: 'dist/js/joomla-collapse-es5.js', nomodule: '' },
      // {pattern: 'dist/js/joomla-dropdown-es5.js', nomodule: '' },
      // {pattern: 'dist/js/joomla-modal-es5.js', nomodule: '' },
      // {pattern: 'dist/js/joomla-panels-es5.js', nomodule: '' },
      // {pattern: 'dist/js/joomla-tab-es5.js', nomodule: '' },
      // {pattern: 'dist/js/joomla-tip-es5.js', nomodule: '' },

      { pattern: './tests/**/*.js' },
      { pattern: './tests/**/*.html' },
    ],

    preprocessors: {
      // 'packags/src/**/js/*.js': ['coverage'],
      'tests/**/*.html': ['html2js'],
    },
    plugins: [
      'karma-sauce-launcher',
      'karma-jasmine',
      'karma-fixture',
      'karma-html2js-preprocessor',
    ],
    // frameworks to use
    frameworks: ['jasmine', 'fixture'],
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    runnerPort: 9100,
    colors: true,
    port: 9876,
    autoWatch: false,
    singleRun: true,
    logLevel: config.LOG_INFO,

    // Adjuste these ones with your own settings.
    concurrency: 1,
    captureTimeout: 120000,
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 20000,
    browserDisconnectTolerance: 1,

    // SauceLabs Configuration
    sauceLabs: {
      testName: 'Web App Unit Tests',
      build: `GITHUB #${process.env.GITHUB_RUN_ID} (${process.env.GITHUB_RUN_NUMBER})`,
      startConnect: false,
      tunnelIdentifier: `github-action-tunnel-custom-elements-${process.env.GITHUB_RUN_ID}`,
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['dots', 'saucelabs'],
    singleRun: true
  });
};
