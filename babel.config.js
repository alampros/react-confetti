module.exports = (api) => {
  api.cache(false)
  return {
    presets: [
      '@babel/preset-react',
      '@babel/env',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  }
}
