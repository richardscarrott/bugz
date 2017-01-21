import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  plugins: [ nodeResolve(), commonjs(), babel(babelrc()) ],
  external: [ 'ramda' ],
  targets: [
    {
      dest: path.join('dist', pkg.main),
      format: 'umd',
      moduleName: 'Bugz',
      sourceMap: true,
      globals: { ramda: 'R' }
    },
    {
      dest: path.join('dist', pkg.module),
      format: 'es',
      // Will this be of use when re-bundled in an app?
      sourceMap: true
    }
  ]
}
