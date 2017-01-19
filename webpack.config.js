const path = require("path");
const webpack = require("webpack");
// const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        'thumbnailSlider': './index.js'
    },
    output: {
        library: 'ThumbnailSlider',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.css/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader'
            })
        }, ]
    },
    devtool: 'cheap-source-map',
    plugins: [new ExtractTextPlugin('thumbnailSlider.css')],
};
