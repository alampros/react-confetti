const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-confetti': path.resolve(__dirname, '../../..'),
      },
    },
  })
}
