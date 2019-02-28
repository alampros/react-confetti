exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if(stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /.*SizedConfetti\.js$/,
            use: loaders.null(),
          },
          {
            test: /^retoggle$/,
            use: loaders.null(),
          },
          {
            test: /^react-json-view$/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
