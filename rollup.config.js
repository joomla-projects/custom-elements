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
  'src/js/alert/index.js',
  'src/js/collapse/index.js',
  'src/js/dropdown/index.js',
  'src/js/modal/index.js',
  'src/js/panels/index.js',
  'src/js/tab/index.js',
  'src/js/tip/index.js',
];

const scssFiles = [
  'src/scss/alert/index.scss',
  'src/scss/collapse/index.scss',
  'src/scss/dropdown/index.scss',
  'src/scss/modal/index.scss',
  'src/scss/panels/index.scss',
  'src/scss/tab/index.scss',
  'src/scss/tip/index.scss',
]

const buildSettings = async () => {
  const finalSettings = [];

  jsFiles.forEach((file) => {
    const el = file.replace('src/js/', '').replace('/index.js', '')

    finalSettings.push({
      input: `src/js/${el}/index.js`,
      plugins: [nodeResolve()],
      output: [
        { file: `dist/js/joomla-${el}.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${el}.js`, format: 'esm' },
      ],
    });

    finalSettings.push({
      input: `src/js/${el}/index.js`,
      plugins: [nodeResolve(), terser()],
      output: [
        { file: `dist/js/joomla-${el}.min.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${el}.min.js`, format: 'esm' },
      ],
    });

    finalSettings.push({
      input: `src/js/${el}/index.js`,
      plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
      output: [
        { file: `dist/js/joomla-${el}-es5.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${el}-es5.js`, format: 'esm' },
      ],
    });

    finalSettings.push({
      input: `src/js/${el}/index.js`,
      plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()],
      output: [
        { file: `dist/js/joomla-${el}-es5.min.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${el}-es5.min.js`, format: 'esm' },
      ],
    });
  });

  scssFiles.forEach((scssFile) => {
    const el = scssFile.replace('src/scss/', '').replace('/index.scss', '')
    console.log(el)
    finalSettings.push({
    input: `src/scss/${el}/index.scss`,
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer])
          .process(css)
          .then(async (result) => {
            const path1 = `dist/css/joomla-${el}.css`;
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
    input: `src/scss/${el}/index.scss`,
    plugins: [
      sass({
        output: false,
        processor: css => postcss([autoprefixer, cssnano])
          .process(css)
          .then(async (result) => {
            const path1 = `dist/css/joomla-${el}.min.css`;
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
