# Joomla UI custom elements

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)

### UI components using modern technologies

This is a collection of all the components that Joomla is using. They are developed with the new W3C standard: custom elements. Each component is using plain and optimized javascript for performance. Also the HTML markup (wherever possible) is reduced to offer a great convinience for front end developers).

### Using the NPM power

You can install this package by using NPM:
```bash
$ npm install joomla-custom-elements --save
```

### Configuration

The prefix of all the elements is configuarable, to do so duplicate the file `settings.yaml` and name the new file as `settings-custom.yaml`. Open the file in your editor and change the prefix to your taste. (it needs to be one word check the W3C speifications for valid custom element naming).
Build your custom elements by executing:
```bash
$ grunt
```
The folder named `dist` contains all your elements.

### Usage

For each component that you need to have available in your page you need to add the custom element in the head of the document:
```html
<script src="joomla-alert.min.js"></script>
<link rel="stylesheet" href="joomla-alert.min.css">
```

### Browser support

Although all the major browsers are **committed** to support custom elements some of the **all green browsers** do need a polyfill. The polyfills can be found in the dist folder and are created by the Polymer team (Polymer is a Google project).
The repo for the actual polyfill is: https://github.com/webcomponents/webcomponentsjs

### License

The library is released under the [MIT license](LICENSE)
