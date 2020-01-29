const path = require('path')

/**
 * Webpack emits sourcemap paths that have an invalid `webpack://` prefix,
 * and which don't match the paths where source files will be installed by
 * npm or yarn. This short function replaces all bogus sourcemap paths
 * with valid relative paths relative to the folder where the source files
 * will be installed when the library is installed.
 * */
function devtoolModuleFilenameTemplate(info) {
  const resource = info.resource
    .replace('webpack://ReactConfetti/', '') // remove bogus webpath prefixes
    .replace(/^\.\/node_modules\//, '../../') // at runtime, deps are uncle not sibling to dist
    .replace(/^\.\/src\//, '../src/') // source folder is a sibling of dist, not child
  return resource
}

const base = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'react-confetti': ['./src/ReactConfetti.tsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    devtoolModuleFilenameTemplate,
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
