import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import {existsSync, mkdirSync, writeFileSync} from 'fs';
import {dirname} from 'path';

export default [
  // alert esm
  {
    input: 'src/js/alert/index.js',
    output: [
      { file: 'dist/js/joomla-alert.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-alert.js', format: 'esm' },
    ],
    plugins: [nodeResolve()],
  },
  {
    input: 'src/js/alert/index.js',
    output: [
      { file: 'dist/js/joomla-alert.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-alert.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), terser()],
  },
  // alert es5
  {
    input: 'src/js/alert/index.js',
    output: [
      { file: 'dist/js/joomla-alert-es5.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-alert-es5.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
  },
  {
    input: 'src/js/alert/index.js',
    output: [
      { file: 'dist/js/joomla-alert-es5.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-alert-es5.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
  },


  // collapse esm
  {
    input: 'src/js/collapse/index.js',
    output: [
      { file: 'dist/js/joomla-collapse.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-collapse.js', format: 'esm' },
    ],
    plugins: [nodeResolve()],
  },
  {
    input: 'src/js/collapse/index.js',
    output: [
      { file: 'dist/js/joomla-collapse.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-collapse.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), terser()],
  },
  // collapse es5
  {
    input: 'src/js/collapse/index.js',
    output: [
      { file: 'dist/js/joomla-collapse-es5.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-collapse-es5.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
  },
  {
    input: 'src/js/collapse/index.js',
    output: [
      { file: 'dist/js/joomla-collapse-es5.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-collapse-es5.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
  },

  // dropdown esm
  {
    input: 'src/js/dropdown/index.js',
    output: [
      { file: 'dist/js/joomla-dropdown.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-dropdown.js', format: 'esm' },
    ],
    plugins: [nodeResolve()],
  },
  {
    input: 'src/js/dropdown/index.js',
    output: [
      { file: 'dist/js/joomla-dropdown.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-dropdown.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), terser()],
  },
  // dropdown es5
  {
    input: 'src/js/dropdown/index.js',
    output: [
      { file: 'dist/js/joomla-dropdown-es5.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-dropdown-es5.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
  },
  {
    input: 'src/js/dropdown/index.js',
    output: [
      { file: 'dist/js/joomla-dropdown-es5.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-dropdown-es5.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
  },

  // modal esm
  {
    input: 'src/js/modal/index.js',
    output: [
      { file: 'dist/js/joomla-modal.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-modal.js', format: 'esm' },
    ],
    plugins: [nodeResolve()],
  },
  {
    input: 'src/js/modal/index.js',
    output: [
      { file: 'dist/js/joomla-modal.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-modal.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), terser()],
  },
  // modal es5
  {
    input: 'src/js/modal/index.js',
    output: [
      { file: 'dist/js/joomla-modal-es5.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-modal-es5.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
  },
  {
    input: 'src/js/modal/index.js',
    output: [
      { file: 'dist/js/joomla-modal-es5.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-modal-es5.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
  },


  // panels esm
  {
    input: 'src/js/panels/index.js',
    output: [
      { file: 'dist/js/joomla-panels.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-panels.js', format: 'esm' },
    ],
    plugins: [nodeResolve()],
  },
  {
    input: 'src/js/panels/index.js',
    output: [
      { file: 'dist/js/joomla-panels.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-panels.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), terser()],
  },
  // panels es5
  {
    input: 'src/js/panels/index.js',
    output: [
      { file: 'dist/js/joomla-panels-es5.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-panels-es5.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
  },
  {
    input: 'src/js/panels/index.js',
    output: [
      { file: 'dist/js/joomla-panels-es5.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-panels-es5.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
  },

  // tab esm
  {
    input: 'src/js/tab/index.js',
    output: [
      { file: 'dist/js/joomla-tab.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-tab.js', format: 'esm' },
    ],
    plugins: [nodeResolve()],
  },
  {
    input: 'src/js/tab/index.js',
    output: [
      { file: 'dist/js/joomla-tab.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-tab.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), terser()],
  },
  // tab es5
  {
    input: 'src/js/tab/index.js',
    output: [
      { file: 'dist/js/joomla-tab-es5.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-tab-es5.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
  },
  {
    input: 'src/js/tab/index.js',
    output: [
      { file: 'dist/js/joomla-tab-es5.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-tab-es5.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
  },

  // tip esm
  {
    input: 'src/js/tip/index.js',
    output: [
      { file: 'dist/js/joomla-tip.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-tip.js', format: 'esm' },
    ],
    plugins: [nodeResolve()],
  },
  {
    input: 'src/js/tip/index.js',
    output: [
      { file: 'dist/js/joomla-tip.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-tip.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), terser()],
  },
  // tip es5
  {
    input: 'src/js/tip/index.js',
    output: [
      { file: 'dist/js/joomla-tip-es5.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-tip-es5.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
  },
  {
    input: 'src/js/tip/index.js',
    output: [
      { file: 'dist/js/joomla-tip-es5.min.js', format: 'esm' },
      { file: 'docs/_media/js/joomla-tip-es5.min.js', format: 'esm' },
    ],
    plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
  },

  /**
   * Styles
   */

  // alert
  {
    input: 'src/scss/alert/alert.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-alert.css';
            const path2 = 'docs/_media/css/joomla-alert.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});

          })
      }),
    ],
  },
  {
    input: 'src/scss/alert/alert.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer, cssnano])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-alert.min.css';
            const path2 = 'docs/_media/css/joomla-alert.min.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});
          })
      }),
    ],
  },

  // collapse
  {
    input: 'src/scss/collapse/collapse.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-collapse.css';
            const path2 = 'docs/_media/css/joomla-collapse.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});

          })
      }),
    ],
  },
  {
    input: 'src/scss/collapse/collapse.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer, cssnano])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-collapse.min.css';
            const path2 = 'docs/_media/css/joomla-collapse.min.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});
          })
      }),
    ],
  },

  // dropdown
  {
    input: 'src/scss/dropdown/dropdown.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-dropdown.css';
            const path2 = 'docs/_media/css/joomla-dropdown.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});

          })
      }),
    ],
  },
  {
    input: 'src/scss/dropdown/dropdown.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer, cssnano])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-dropdown.min.css';
            const path2 = 'docs/_media/css/joomla-dropdown.min.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});
          })
      }),
    ],
  },

  // modal
  {
    input: 'src/scss/modal/modal.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-modal.css';
            const path2 = 'docs/_media/css/joomla-modal.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});

          })
      }),
    ],
  },
  {
    input: 'src/scss/modal/modal.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer, cssnano])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-modal.min.css';
            const path2 = 'docs/_media/css/joomla-modal.min.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});
          })
      }),
    ],
  },

  // panels
  {
    input: 'src/scss/panels/panels.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-panels.css';
            const path2 = 'docs/_media/css/joomla-panels.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});

          })
      }),
    ],
  },
  {
    input: 'src/scss/panels/panels.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer, cssnano])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-panels.min.css';
            const path2 = 'docs/_media/css/joomla-panels.min.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});
          })
      }),
    ],
  },

  // tab
  {
    input: 'src/scss/tab/tab.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-tab.css';
            const path2 = 'docs/_media/css/joomla-tab.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});

          })
      }),
    ],
  },
  {
    input: 'src/scss/tab/tab.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer, cssnano])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-tab.min.css';
            const path2 = 'docs/_media/css/joomla-tab.min.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});
          })
      }),
    ],
  },

  // tip
  {
    input: 'src/scss/tip/tip.scss',
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-tip.css';
            const path2 = 'docs/_media/css/joomla-tip.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});

          })
      }),
    ],
  },
  {
    input: 'src/scss/tip/tip.scss',
    plugins: [
      sass({
        processor: css => postcss([autoprefixer, cssnano])
          .process(css)
          .then(result => {
            const path1 = 'dist/css/joomla-tip.min.css';
            const path2 = 'docs/_media/css/joomla-tip.min.css';
            if (!existsSync(dirname(path1))) {
              mkdirSync(dirname(path1), {recursive: true})
            }
            writeFileSync(path1, result.css, {encoding: 'utf8'});
            if (!existsSync(dirname(path2))) {
              mkdirSync(dirname(path2), {recursive: true})
            }
            writeFileSync(path2, result.css, {encoding: 'utf8'});
          })
      }),
    ],
  },
];
