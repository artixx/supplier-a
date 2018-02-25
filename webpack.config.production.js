const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js',
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/bundle.js',
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

  devtool: 'source-map',

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
        test: /\.(css|less)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'less-loader',
          ],
        }),
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
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('static/style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}
