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
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }, {
                test: /\.(png|jpg|gif)$/, loader: 'raw-loader'
            }, {
                test: /icon-.+\.(svg)$/, loader: 'raw-loader'
            }, {
                test: /\.styl$/,loader: 'css-loader!stylus-loader'
            }, {
                test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "raw-loader"
            }, {
                test: /fonts\/.+\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "raw-loader"
            }, {
                test: /\.json$/, loader: "json-loader"
            }

        ]
    }
};
