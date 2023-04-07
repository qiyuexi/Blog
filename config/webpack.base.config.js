const path = require('path');
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.jsx', '...']
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
              loader: 'babel-loader',
              options: {
                "presets": [
                  "@babel/preset-env",
                  ["@babel/preset-react", {"runtime": "automatic"}]  //解决Uncaught ReferenceError: React is not defined 报错解决
                ]
              }
          }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      } 
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    })
  ]
}