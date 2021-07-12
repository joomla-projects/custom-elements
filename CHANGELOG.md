## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Refactor build tools to rollup from Grunt
- Refactor tests to use karma from WCT Tester
- Add type="button" to the alert close button
- Refactor of the alert element
  - Removed `acknowledge` attribute
  - Removed `href` attribute
  - Added `close-text` attribute. This should be used to load the close button with multilingual text
  - Removed `joomla.alert.closed` event from the element

## 0.0.41/0.0.42
*Note 0.0.41 was released with the dist folder still from 0.0.40. Please do not use the release and instead use 0.0.42*

- Moved tests from Travis to GitHub Actions
- Moved last dependencies to be devDependencies
- Documentation cleanup/improvements
- Remove dependencies on Bower
- No longer ship with Web Component Polyfills in the dist folder. These were a clone of existing polyfills that
  can be found [here](https://github.com/webcomponents/polyfills/) and we recommend you pick a version of the polyfills
  appropriate for your minimum browser requirements and load it async using the loader tool.
- Optimise SCSS
- Fix wrong event target in tabs when child is a HTML tag

## 0.0.40
0.0.39 still had the compiled assets from 0.0.38. This fixes that distribution issue.

## 0.0.39
- Add support for prefers-reduced-motion in alerts
- Allow toggling accordion on click in the tab custom element
- Dependency updates
