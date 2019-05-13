import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: {
    index: 'src/index.ts',
  },
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'lib',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],

  plugins: [typescript(), commonjs(), resolve(), terser()],
};
