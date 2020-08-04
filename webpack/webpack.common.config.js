require('module-alias/register');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const npm_package = require('../package.json');

module.exports = () => ({
  context: path.resolve(__dirname, '../src'),

  resolve: {
    alias: npm_package._moduleAliases || {},
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    }, {
      test: /\.(png|jpe?g|gif|svg|ico)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      title: 'React application',
      template: './index.html',
      inject: 'body',
    }),
  ],
});
