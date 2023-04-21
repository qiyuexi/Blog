const path = require('path');
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const BaseCongfig = require('./webpack.base.config');

const devConfig = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 8080,
    open: false,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,  //是否跨域
      //   pathRewrite: { '^/api': '/' }
      // }
    }
  },
}

module.exports = merge(BaseCongfig, devConfig)