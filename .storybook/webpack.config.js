module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: ['babel-loader'],
  })
  config.module.rules.push({
    test: /.stories.jsx?$/,
    use: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
