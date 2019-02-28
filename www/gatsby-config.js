const postcssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')

module.exports = {
  pathPrefix: '/react-confetti',
  siteMetadata: {
    title: 'React Confetti',
    siteUrl: 'http://alampros.github.io/react-confetti/',
    description: 'Confetti without the cleanup',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'stub-bad-ssr',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postcssNested(),
          autoprefixer(),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-118827190-1',
      },
    },
  ],
}
