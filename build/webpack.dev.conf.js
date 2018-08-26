const merge = require('webpack-merge')
const Conf = require('./webpack.base.conf.js')

module.exports = merge(Conf, {
  mode: 'development',
  devServer: {
    open: true,
    publicPath: '/'
  }
})
