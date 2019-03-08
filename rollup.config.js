import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const base = {
  input: './src/ReactConfetti.tsx',
  output: {
    file: './dist/react-confetti.js',
    format: 'umd',
    name: 'ReactConfetti',
    sourcemap: true,
    globals: {
      react: 'React',
    },
  },
  external: ['react'],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ extensions, include: ['src/**/*'] }),
  ],
}

export default [
  base,
  {
    ...base,
    output: {
      ...base.output,
      file: './dist/react-confetti.min.js',
    },
    plugins: [
      ...base.plugins,
      uglify(),
    ],
  }
]
