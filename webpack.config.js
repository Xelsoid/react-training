const merge = require('webpack-merge');
const developmentConfig = require('./webpack/webpack.dev.config');
const productionConfig = require('./webpack/webpack.prod.config');
const commonConfig = require('./webpack/webpack.common.config');

module.exports = () => {
  if (process.env.NODE_ENV === 'development') {
    return merge([
      commonConfig(),
      developmentConfig(),
    ])
  }
  if (process.env.NODE_ENV === 'production') {
    return merge([
      commonConfig(),
      productionConfig()
    ])
  }
};
