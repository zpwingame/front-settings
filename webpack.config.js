const path = require("path");
const webpack = require("webpack");
// const autoprefixer = require("autoprefixer");
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
      rules: [
        {test: /\.css/,
          loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader?-url'
          })},
       {test: /\.scss$/,   loader: ExtractTextPlugin.extract({
            fallbackLoader:'style-loader',
            loader:'css-loader?-url!postcss-loader!sass-loader?'
        })}
           ]
    },
    devtool: 'cheap-source-map',
    plugins: [new ExtractTextPlugin('index.min.css'),
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } }),],
};
// server.watch(__dirname + '/dist');
