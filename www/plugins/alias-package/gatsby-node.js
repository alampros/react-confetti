const path = require('path')

exports.modifyWebpackConfig = ({ config, _stage }) => {
  return config.merge({
    resolve: {
      alias: {
        'react-confetti': path.resolve(config._config.context, '..'),
      },
    },
  })
}
