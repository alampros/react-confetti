import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const base = {
  input: './src/react-confetti.js',
  output: {
    file: './dist/react-confetti.js',
    format: 'umd',
    name: 'ReactConfetti',
    sourcemap: true,
    globals: {
      react: 'React'
    },
  },
  external: ['react', 'prop-types'],
  plugins: [
    babel(),
  ]
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
      babel(),
      uglify(),
    ]
  }
]
