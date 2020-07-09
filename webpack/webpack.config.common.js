require('module-alias/register');
const path = require('path');
const npm_package = require('../package.json');
const webpack = require('webpack');
const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  resolve: {
    alias: npm_package._moduleAliases || {},
    extensions: ['.js', '.jsx'],
  },

  output: {
    filename: 'js/main.js',
    path: path.resolve('./public'),
  },

  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
  ],
};
