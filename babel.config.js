module.exports = (api) => {
  api.cache(false)
  return {
    presets: [
      '@babel/typescript',
      '@babel/preset-react',
      '@babel/env',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/proposal-object-rest-spread',
    ],
  }
}
