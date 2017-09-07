import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import pkg from './package.json'

const banner = pkg.name + ' - ' + pkg.version + ' | ' +
  '(c) 2015, ' + new Date().getFullYear() + '  ' + pkg.author + ' | ' +
  pkg.license + ' | ' + pkg.homepage


const configDev = {
  entry: './src/react-confetti.jsx',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'react-confetti.js',
    library: 'ReactConfetti',
    libraryTarget: 'umd',
    publicPath: '/lib'
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
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
              ],
            }
          },
          { loader: 'sass-loader' },
        ]
      },
    ],
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
    filename: 'react-confetti.min.js',
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
  entry: './src/docs.jsx',
  output: {
    path: path.resolve('./docs'),
    filename: 'docs.js',
    publicPath: '/docs',
  },
}

const configs = [
  configDev,
  configProd,
  configDocs,
]

export default configs
