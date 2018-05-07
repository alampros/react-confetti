import path from 'path'
import webpack from 'webpack'
import pkg from './package.json'

const banner = pkg.name + ' - ' + pkg.version + ' | ' +
  '(c) 2015, ' + new Date().getFullYear() + '  ' + pkg.author + ' | ' +
  pkg.license + ' | ' + pkg.homepage


const configDev = {
  entry: './src/react-confetti.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'react-confetti.js',
    library: 'ReactConfetti',
    libraryTarget: 'umd',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader'
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
    'prop-types': 'prop-types',
    fbjs: 'fbjs',
  },
  plugins: [
    new webpack.BannerPlugin(banner),
  ]
}

const configProd = {
  ...configDev,
  mode: 'production',
  output: {
    ...configDev.output,
    filename: 'react-confetti.min.js',
  },
  plugins: [
    ...configDev.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
}

const configs = [
  configDev,
  configProd,
]

export default configs
