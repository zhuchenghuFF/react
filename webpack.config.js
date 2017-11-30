const path = require('path');
const webpack = require('webpack');

const config = {
  entry: 'src/server.js',
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'src/server.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    root: __dirname
  }
};

module.exports = config;
