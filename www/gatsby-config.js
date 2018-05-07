module.exports = {
  siteMetadata: {
    title: 'React Confetti',
    siteUrl: 'http://alampros.github.io/react-confetti/',
    description: 'Confetti without the cleanup',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-118827190-1',
      },
    },
  ],
}
