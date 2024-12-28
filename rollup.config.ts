import pluginTs from '@rollup/plugin-typescript'
import { RollupOptions } from 'rollup'
import dts from 'rollup-plugin-dts'

const input = 'src/index.ts'
const external = ['react', 'react-dom', 'react/jsx-runtime']
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react/jsx-runtime': 'jsxRuntime',
}

const config: RollupOptions[] = [
  {
    input,
    output: [
      {
        file: 'dist/react-confetti.cjs',
        format: 'cjs',
        globals,
        sourcemap: true,
      },
      {
        file: 'dist/react-confetti.mjs',
        format: 'es',
        globals,
        sourcemap: true,
      },
      {
        name: 'ReactConfetti',
        file: 'dist/react-confetti.iife.js',
        format: 'iife',
        globals,
        sourcemap: true,
      },
      {
        name: 'ReactConfetti',
        file: 'dist/react-confetti.umd.js',
        format: 'umd',
        globals,
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      pluginTs({
        exclude: ['src/stories/**/*', 'rollup.config.ts'],
      }),
    ],
  },
  {
    input,
    output: [
      { format: 'cjs', file: 'dist/react-confetti.d.cts' },
      { format: 'es', file: 'dist/react-confetti.d.mts' },
    ],
    external,
    plugins: [dts()],
  },
]

export default config
