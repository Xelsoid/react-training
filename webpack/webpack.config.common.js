require('module-alias/register');
const path = require('path');
const webpack = require('webpack');
const npm_package = require('../package.json');

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
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }],
  },
  plugins: [
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
  ],
};
