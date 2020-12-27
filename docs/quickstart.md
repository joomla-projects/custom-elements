# Quick start

It is recommended to install this repo locally so you can customize the css to match your app/theme/template colours. To do so you can use `npm`:

```bash
$ npm i joomla-ui-custom-elements
```

## Build

To build the elements just use `grunt`:

```bash
$ grunt
```
!> So editing the scss files to match your styles and then running `grunt` will produce the elements based on your styles.

!> You can change the prefix of the element as well, for simplicity this document will refer to elements with the standard prefix `joomla`

## Using the elements

Due to compatibility issues due to browsers support you need to have a polyfill, so your page will render as expected. The code for this is:
- A shim so ES5 code can run flawlessly into ES6 Browsers
```html
<script src="webcomponents-loader.js"></script>
```
- A polyfill so custom elements can be used in older Browsers
```html
<script src="webcomponents-loader.js"></script>
```

For each element that you want to use in your page you have to import the relevant CSS and JS file on your page, e.g:
```html
<link href="joomla-alert.min.css" rel="stylesheet">
<script src="joomla-alert.min.js"></script>
```

?> The polyfill needs to be inserted only once before the first element.

## Customize your elements

Every element has its own `.scss` file and there is a global `variables.scss` that can be used to tweak the styling to your own needs. Once you've changed the variables re-run `grunt` to rebuild the elements.


## Custom elements are CSS framework agnostic

Check these collections of custom elements running quite happily with the most popular CSS frameworks:

----
<a href="bootstrap-demo.html">Bootstrap</a>
-----
<a href="foundation-demo.html">Foundation</a>
-----
<a href="uikit-demo.html">UiKit</a>
-----
