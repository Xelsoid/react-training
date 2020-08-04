const path = require('path');
const webpack = require('webpack');

module.exports = () => ({
  mode: 'development',
  devtool: 'source-map',

  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    './index.tsx',
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  watch: true,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },
});
