import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import {existsSync} from 'fs';
import {mkdir, writeFile} from 'fs/promises';
import {dirname} from 'path';

const jsFiles = [
  'packages/alert/src/js/index.js',
  'packages/collapse/src/js/index.js',
  'packages/dropdown/src/js/index.js',
  'packages/modal/src/js/index.js',
  'packages/panels/src/js/index.js',
  'packages/tab/src/js/index.js',
  'packages/tip/src/js/index.js',
];

const scssFiles = [
  'packages/alert/src/scss/index.scss',
  'packages/collapse/src/scss/index.scss',
  'packages/dropdown/src/scss/index.scss',
  'packages/modal/src/scss/index.scss',
  'packages/panels/src/scss/index.scss',
  'packages/tab/src/scss/index.scss',
  'packages/tip/src/scss/index.scss',
]

const buildSettings = async () => {
  const finalSettings = [];

  jsFiles.forEach((file) => {
    const el = file.replace('packages/', '').replace('/src/js/index.js', '');

    finalSettings.push({
      input: `packages/${el}/src/js/index.js`,
      plugins: [nodeResolve()],
      output: [
        { file: `packages/${el}/dist/js/joomla-${el}.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${el}.js`, format: 'esm' },
      ],
    });

    finalSettings.push({
      input: `packages/${el}/src/js/index.js`,
      plugins: [nodeResolve(), terser()],
      output: [
        { file: `packages/${el}/dist/js/joomla-${el}.min.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${el}.min.js`, format: 'esm' },
      ],
    });

    finalSettings.push({
      input: `packages/${el}/src/js/index.js`,
      plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
      output: [
        { file: `packages/${el}/dist/js/joomla-${el}-es5.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${el}-es5.js`, format: 'esm' },
      ],
    });

    finalSettings.push({
      input: `packages/${el}/src/js/index.js`,
      plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
      output: [
        { file: `packages/${el}/dist/js/joomla-${el}-es5.min.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${el}-es5.min.js`, format: 'esm' },
      ],
    });
  });

  scssFiles.forEach((scssFile) => {
    const el = scssFile.replace('packages/', '').replace('/src/scss/index.scss', '');

    finalSettings.push({
      input: `packages/${el}/src/scss/index.scss`,
      plugins: [
        sass({
          output: false,
          processor: css => postcss([autoprefixer])
            .process(css)
            .then(async (result) => {
              const path1 = `packages/${el}/dist/css/joomla-${el}.css`;
              const path2 = `docs/_media/css/joomla-${el}.css`;
              if (!existsSync(dirname(path1))) {
                await mkdir(dirname(path1), {recursive: true})
              }
              await writeFile(path1, result.css, {encoding: 'utf8'});
              if (!existsSync(dirname(path2))) {
                await mkdir(dirname(path2), {recursive: true})
              }
              await writeFile(path2, result.css, {encoding: 'utf8'});

            })
        }),
      ],
    });

    finalSettings.push({
      input: `packages/${el}/src/scss/index.scss`,
      plugins: [
        sass({
          output: false,
          processor: css => postcss([autoprefixer, cssnano])
            .process(css)
            .then(async (result) => {
              const path1 = `packages/${el}/dist/css/joomla-${el}.min.css`;
              const path2 = `docs/_media/css/joomla-${el}.min.css`;
              if (!existsSync(dirname(path1))) {
                await mkdir(dirname(path1), {recursive: true})
              }
              await writeFile(path1, result.css, {encoding: 'utf8'});
              if (!existsSync(dirname(path2))) {
                await mkdir(dirname(path2), {recursive: true})
              }
              await writeFile(path2, result.css, {encoding: 'utf8'});

            })
        }),
      ],
    });
  })

  return finalSettings;
};

export default buildSettings();
