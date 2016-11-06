// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    devtool: '#eval-source-map',
    // context: path.join(__dirname, 'server', 'public', 'js'),
    context: __dirname,

    entry: [
        './client/jsx/ClientApp.jsx'
    ],

    output: {
        path: path.join(__dirname, 'server', 'public', 'js'),
        publicPath: '/js/',
        filename: 'bundle.js'
    },

    browser: "firefox",

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    // Not sure if this is working
    watchOptions: { aggregateTimeout: 1000 },
    aggregateTimeout: 3000,

    module: {
        loaders: [
            {
                test: /.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};
