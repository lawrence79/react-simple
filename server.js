/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist', 'index.html'));
});

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 🚧  Webpack development server listening on port %s', port);
    }
});
