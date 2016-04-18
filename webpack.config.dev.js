const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'src'),
    public: path.join(__dirname, 'dist'),
    publicPath: '/'
};


const config = {
    // Entry accepts a path or an object of entries. We'll be using the
    // latter form given it's convenient with more complex configurations.
    entry: {
        app: [
          'webpack-hot-middleware/client?http://localhost:3000',
          'webpack/hot/only-dev-server',
          PATHS.app
          ]
    },
    output: {
        path: PATHS.public,
        publicPath: PATHS.publicPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?presets[]=react,presets[]=es2015'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style","css!sass")
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
        }],
        noParse: /\.min\.js/
    },
    resolve: {
        root: process.cwd(),
        modulesDirectories: [
            'bower_components',
            'node_modules'
        ],
        extensions: ['', '.scss', '.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name].css')
    ]
};

// Default configuration
if (TARGET === 'start' || !TARGET) {
    module.exports = merge(config, {});
}

if (TARGET === 'watch') {
    module.exports = merge(config, {});
}

module.exports = config;
