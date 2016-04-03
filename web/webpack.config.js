const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 3333,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
