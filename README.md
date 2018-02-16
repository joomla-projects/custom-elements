# Joomla UI custom elements

Build Status
---------------------
| Travis-CI  | GreenKeeper | Webcomponents.org |
| ------------- | ------------- | ------------- |
| [![Build Status](https://travis-ci.org/joomla-projects/custom-elements.svg?branch=master)](https://travis-ci.org/joomla-projects/custom-elements) | [![Greenkeeper badge](https://badges.greenkeeper.io/joomla-projects/custom-elements.svg)](https://greenkeeper.io/) | [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/joomla-projects/custom-elements) |

| Sauce Labs |
| ------------- |
| [![Build Status](https://saucelabs.com/browser-matrix/joomla-custom-elements.svg)](https://saucelabs.com/beta/builds/ea93394ca1344c6aa388509849383c6e) |
### UI components using modern technologies

This is a collection of all the components that Joomla is using. They are developed with the new W3C standard: custom elements. Each component is using plain and optimized javascript for performance. Also the HTML markup (wherever possible) is reduced to offer a great benefit for front end developers).

### Using the NPM power

You can install this package by using NPM:
```bash
$ npm i joomla-ui-custom-elements
```

### Configuration

The prefix of all the elements is configuarable. To do so duplicate the file `settings.yaml` and name the new file as `settings-custom.yaml`. Open the file in your editor and change the prefix to your taste. (It needs to be one word - check the W3C speifications for valid custom element naming).
Build your custom elements by executing:
```bash
$ grunt
```
The folder named `dist` contains all your elements.

### Usage

For each component that you need to have available in your page you need to add the custom element in the head of the document:
```html
<script src="joomla-alert.min.js"></script>
```

### Tests

Once again we are using the great tools from the polymer team here!
You will need `wct` (web component tester) installed globally. To do so just run `npm install web-component-tester -g`.
You might need to run that command as sudo!
After that, in the root folder of this project just run `wct` and see the status of the tests...

The default setup is based on MacOS system and looking for Chrome, Firefox and Safari browsers, you can change this by editing line 5 of https://github.com/joomla-projects/custom-elements/blob/master/wct.conf.json#L5

### Browser support

Although all the major browsers are **committed** to support custom elements some of the **all green browsers** do need a polyfill. The polyfills can be found in the dist folder and are created by the Polymer team (Polymer is a Google project).
The repo for the actual polyfill is: https://github.com/webcomponents/webcomponentsjs

### Documentation
Fully documented [here](https://joomla-projects.github.io/custom-elements/)

### License

The library is released under the [GPL license](LICENSE)
