import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';

const Elements = [
  'alert',
  'collapse',
  'dropdown',
  'modal',
  'panels',
  'tabs',
  'tip',
];

const buildSettings = async () => {
  const finalSettings = [];

  Elements.forEach((file) => {
    finalSettings.push({
      input: `src/js/${file}/${file}.js`,
      plugins: [nodeResolve()],
      output: [
        { file: `dist/js/joomla-${file}.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${file}.js`, format: 'esm' },
        { file: `dist/js/joomla-${file}.min.js`, format: 'esm', plugins: [terser()] },
        { file: `docs/_media/js/joomla-${file}.min.js`, format: 'esm', plugins: [terser()] },
      ],
    });

    finalSettings.push({
      input: `src/js/${file}/${file}.js`,
      plugins: [nodeResolve(), getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
      output: [
        { file: `dist/js/joomla-${file}-es5.js`, format: 'esm' },
        { file: `docs/_media/js/joomla-${file}-es5.js`, format: 'esm' },
        { file: `dist/js/joomla-${file}-es5.min.js`, format: 'esm', plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()] },
        { file: `docs/_media/js/joomla-${file}-es5.min.js`, format: 'esm', plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), terser()] },
      ],
    });
  });

  Elements.forEach((scssFile) => {
    finalSettings.push({
      input: `src/scss/${scssFile}/${scssFile}.scss`,
      plugins: [
        sass({
          output: false,
          processor: css => postcss([autoprefixer])
            .process(css)
            .then(async (result) => {
              const path1 = `dist/css/joomla-${scssFile}.css`;
              const path2 = `docs/_media/css/joomla-${scssFile}.css`;
              if (!existsSync(dirname(path1))) {
                await mkdir(dirname(path1), {recursive: true})
              }
              await writeFile(path1, result.css, {encoding: 'utf8'});
              if (!existsSync(dirname(path2))) {
                await mkdir(dirname(path2), {recursive: true})
              }
              await writeFile(path2, result.css, {encoding: 'utf8'});

              postcss([autoprefixer, cssnano])
              .process(result.css)
              .then(async (result) => {
                const path1 = `dist/css/joomla-${scssFile}.min.css`;
                const path2 = `docs/_media/css/joomla-${scssFile}.min.css`;
                if (!existsSync(dirname(path1))) {
                  await mkdir(dirname(path1), {recursive: true})
                }
                await writeFile(path1, result.css, {encoding: 'utf8'});
                if (!existsSync(dirname(path2))) {
                  await mkdir(dirname(path2), {recursive: true})
                }
                await writeFile(path2, result.css, {encoding: 'utf8'});

              });
            })
        }),
      ],
    });
  })

  return finalSettings;
};

export default buildSettings();
