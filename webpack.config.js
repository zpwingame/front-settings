const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require("autoprefixer");

// const livereload = require('livereload');
// var server = livereload.createServer();
module.exports = {
    entry: {
        'index': './index.js'
    },
    output: {
        library: 'ThumbnailSlider',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].min.js'
    },
    module: {
        // preLoaders: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: 'jshint-loader'
        // }],
        rules: [{
                test: /\.css/,
                // loader: ExtractTextPlugin.extract({
                //     fallbackLoader:'style-loader',
                //     use: 'css-loader?-url'
                // })
                use:["style-loader","css-loader"]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: 'css-loader?-url!postcss-loader!sass-loader?'
                })
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                enforce:'pre',
                use: 'jshint-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
        ]
    },
    devtool: 'cheap-source-map',
    plugins: [new ExtractTextPlugin('index.min.css'),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        }),
    ],
};
// server.watch(__dirname + '/dist');
