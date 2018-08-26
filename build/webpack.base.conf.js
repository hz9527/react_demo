const path = require('path')
const resolve = (p = '') => path.join(__dirname, '../src', p)
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve('../'),
  entry: resolve('./entry.js'),
  output: {
    path: resolve('../dist'),
    filename: 'bundle.[hash].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: resolve('./index.html')
    })
  ]
}
