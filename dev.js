const config = require('./webpack.config');
const webpack = require('webpack');
const compiler = webpack(config);
const livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname);
compiler.watch({
    aggregateTimeout: 300,
    poll: true,
    ignored: /node_modules/
},function(err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
        warning:false
    }))
});
