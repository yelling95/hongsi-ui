/* eslint-disable indent */
import {babel} from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import image from '@rollup/plugin-image'
import url from '@rollup/plugin-url'
import {nodeResolve} from '@rollup/plugin-node-resolve'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.bundle.js',
    format: 'es',
    sourcemap: true,
    exports: 'named',
  },
  watch: {
    include: ['src/**/*'],
    exclude: 'node_modules/**',
    chokidar: {
      usePolling: true,
    },
  },
  plugins: [
    nodeResolve({extensions}),
    babel({
      exclude: ['node_modules/**', '**/*.stories.tsx'],
      extensions,
      include: ['src/**/*'],
    }),
    commonjs({include: 'node_modules/**'}),
    peerDepsExternal({includeDependencies: true}),
    typescript({tsconfig: './tsconfig.json'}),
    postcss({
      use: ['sass'],
      writeDefinitions: true,
      sourceMap: true,
      minimize: true,
      extract: false,
      inject: (cssVariableName) =>
        `import styleInject from 'style-inject';styleInject(${cssVariableName});`,
    }),
    image(),
    url(),
  ],
}
