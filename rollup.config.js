/* eslint-disable indent */
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
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
      exclude: 'node_modules/**',
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
    // json(),
    // url(), // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌.
    // svgr(), // SVG를 컴포넌트로 사용 할 수 있게 해줌.
  ],
}
