var path = require('path');
var projectRoot = path.resolve(__dirname, '../');

module.exports = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
  })
}