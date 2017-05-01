const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'www/js')
  ],
  output: {
    path: path.resolve(__dirname, 'www'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    descriptionFiles: ['package.json', 'bower.json'],
    alias: {
      // foundation: 'foundation-sites/js/foundation.core'
      foundation: 'foundation-sites/dist/js/foundation.min.js'
    }
  },
  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery',
    })
  ],

  module: {
    rules: [
      { test: /\.html$/, use: [{ loader: 'html-loader', options: { minimize: true }, }], },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'], },
      { test: /\.js$/, exclude: [/node_modules/], use: [{ loader: 'babel-loader' }], },
      { test: /\.(jpg|jpeg|png|svg|gif)$/, loader: 'file-loader?name=[path][name].[ext]' },

      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
      { test: /\.(woff|woff2)$/, use: [{ loader: 'url-loader?prefix=font/&limit=5000' }] },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }] },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }] },
    ]
  }
};