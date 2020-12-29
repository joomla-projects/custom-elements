import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';
const pack = require('./package.json');
const { deleteFolderRecursive } = require('./build/helpers')

deleteFolderRecursive('dist/js')

async function main() {
    const buildType = typeof process.env.ROLLUP_BUILD_TYPE !== "undefined" ? process.env.ROLLUP_BUILD_TYPE : "modern";
    const minifiedBuild = typeof process.env.ROLLUP_MINIFIED_BUILD !== "undefined";
    const config = [];
    const settings = pack.settings;
    let currentObject = {};

    settings.elements.forEach(pkg => {
        // Push build config for this package
        currentObject = {
            input: 'src/js/' + pkg + '/' + pkg + '.js',
            output: [
                {
                    file: 'dist/js/' + settings.prefix + '-' + pkg + (buildType === 'legacy' ? '-es5' : '') + (minifiedBuild ? '.min' : '') + '.js',
                    sourcemap: false
                }
            ],
            plugins: [
                buildType === 'legacy' ? babel({ babelHelpers: 'bundled' }) : null,
                minifiedBuild ? terser() : null,
            ]
        }

        if (buildType === 'modern') {
            currentObject.output.push({
              file: 'docs/_media/js/' + settings.prefix + '-' + pkg + (buildType === 'legacy' ? '-es5' : '') + (minifiedBuild ? '.min' : '') + '.js',
              sourcemap: true
            });
        }

        config.push(currentObject);
    });
    return config;
}

export default main();// @returns Promise<RollupConfig>
