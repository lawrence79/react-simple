'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  src: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public')
};

const common = {
  entry: [
    PATHS.src + '/index.jsx'
  ],
  output: {
    path: PATHS.public,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        // Include accepts either a path or an array of paths.
        include: PATHS.src
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        include: PATHS.src
      }
    ]
  },
   resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};


if(TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.public,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT || 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}