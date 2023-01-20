## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Various build tool and github workflow version bumps
  - Update all npm packages
  - Fix scss lint issues
  - Fix javascript lint issues

## 0.2.0
- Refactor of the tabs element
  - Logic rewritten so the tabs won't be reappended (no more moving elements)
  - Added `breakpoint` attribute for controling the transition from tabs/accordion
  - Added tests

## 0.1.0
- Rewrote the scss to use CSS custom properties than preprocessed SCSS variables
- Added animations for entry/exit of the element

## 0.0.43/0.0.44
*Note 0.0.43 was released with the dist folder still from 0.0.42. Please do not use the release and instead use 0.0.44*

- Refactor build tools to rollup from Grunt
- Refactor tests to use karma from WCT Tester
- Add type="button" to the alert close button
- Refactor of the alert element
  - Removed `acknowledge` attribute
  - Removed `href` attribute
  - Added `close-text` attribute. This should be used to load the close button with multilingual text

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
