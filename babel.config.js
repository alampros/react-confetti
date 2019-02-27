module.exports = (api) => {
  api.cache(false)
  return {
    presets: [
      '@babel/preset-react',
      ['@babel/env', {
        loose: true,
        // modules: 'commonjs',
        useBuiltIns: 'usage',
        // debug: true,
      }]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      'react-hot-loader/babel',
    ],
  }
}
