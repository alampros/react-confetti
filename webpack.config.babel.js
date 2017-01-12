import webpack from 'webpack'
import pkg from './package.json'

const banner = pkg.name + ' - ' + pkg.version + ' | ' +
  '(c) 2015, ' + new Date().getFullYear() + '  ' + pkg.author + ' | ' +
  pkg.license + ' | ' + pkg.homepage


const configDev = {
  entry: {
    'react-confetti': './src/react-confetti.jsx'
  },
  output: {
    path: './lib',
    filename: '[name].js',
    library: 'ReactConfetti',
    libraryTarget: 'umd',
    publicPath: '/lib'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.BannerPlugin(banner),
  ]
}

const configProd = {
  ...configDev,
  output: {
    ...configDev.output,
    filename: '[name].min.js',
  },
  plugins: [
    ...configDev.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
}

const configDocs = {
  ...configProd,
  externals: {},
  entry: {
    bundle: './src/docs.jsx'
  },
  output: {
    path: './docs',
    filename: '[name].js',
    publicPath: '/docs',
  },
}

const configs = [
  configDev,
  configProd,
  configDocs,
]

export default configs
