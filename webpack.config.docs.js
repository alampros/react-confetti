const webpack = require('webpack');
const PACKAGE = require('./package.json');
const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | ' +
  '(c) 2017, ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' +
  PACKAGE.license + ' | ' +
  PACKAGE.homepage;

module.exports = {
  entry: {
    'bundle': './src/docs.jsx'
  },
  output: {
    path: './docs',
    filename: '[name].js',
    publicPath: '/docs'
  },
  module: {
    loaders: [
      {
        // Test for js or jsx files.
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.BannerPlugin(banner)
  ]
};
