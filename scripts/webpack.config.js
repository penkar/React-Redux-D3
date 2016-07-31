// require('babel-polyfill');

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './js/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.OldWatchingPlugin()
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['stage-0', 'es2015', 'react']
        }
      }
    ]
  },
  watch: true
};
