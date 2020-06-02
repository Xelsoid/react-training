const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => ({
  mode: 'production',
  devtool: 'none',

  entry: './index.js',
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, '../production'),
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
