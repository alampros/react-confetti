const path = require('path')

const base = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'react-confetti': ['./src/ReactConfetti.tsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'ReactConfetti',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'typeof self !== "undefined" ? self : this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/],
      },
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}

module.exports = [
  base,
  {
    ...base,
    mode: 'production',
    output: {
      ...base.output,
      filename: '[name].min.js',
    },
  },
]
