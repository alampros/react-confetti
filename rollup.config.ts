import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { RollupOptions } from 'rollup'

const config: RollupOptions = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'module',
    sourcemap: true,
    exports: 'default',
  },
  external: ['react', 'react-dom', 'tween-functions'],
  plugins: [
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/env', '@babel/preset-react'],
      extensions: ['.ts', '.tsx'],
      exclude: ['src/stories/**/*'],
    }),
    typescript({
      exclude: ['src/stories/**/*', 'rollup.config.ts'],
    }),
  ],
}

export default config
