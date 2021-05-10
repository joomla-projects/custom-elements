## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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
