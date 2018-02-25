const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      actions: path.resolve(__dirname, 'src/actions'),
      sagas: path.resolve(__dirname, 'src/sagas'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
    },
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'static/',
            publicPath: '../',
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
  },

  watchOptions: {
    ignored: '/node_modules/',
    aggregateTimeout: 500,
    poll: 500,
  },
}
