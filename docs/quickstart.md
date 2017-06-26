# Quick start

It is recommended to install this repo locally so you can customize the css to match your app/theme/template colours. To do so you can use `npm`:

```bash
$ npm install joomla-custom-elements --save
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
```html
<script src="webcomponents-loader.js"></script>
```

For each element that you want to use in your page you have to insert a simple script tag and a stylesheet tag in the head of your page, e.g.:
```html
<link rel="styleesheet" href="joomla-alert.min.css">
<script src="joomla-alert.min.js"></script>
```

?> The polyfill needs to be inserted only once before the first elements.

## Customize your elements

Every element has its own `.scss` file and there is a `variables.scss` that can be used to specify your colours. Once you've changed the variables re-run `grunt` to rebuild the elements
