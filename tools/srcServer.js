let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');
let config = require('../webpack.config');

// var express = require('express');
// var app = express();

// app.get('/*', function(req,res){
//     res.sendFile(__dirname+'index.html');
// });

new webpackDevServer(webpack(config),{
    contentBase: __dirname,
    stats: { colors: true},
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    headers:{ "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": "true"}
}).listen(8080,'localhost', function(err, result){
    if(err){
        return console.log(err);
    }

    console.log("listening at http://localhost:8080/");
});