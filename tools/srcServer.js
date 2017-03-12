var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

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
}).listen(8081,'localhost', function(err, result){
    if(err){
        return console.log(err);
    }

    console.log("listening at http://localhost:8080/");
});

// app.listen(8080);

// if (process.platform === "win32") {
//   var rl = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//  
//   rl.on("SIGINT", function () {
//     process.emit("SIGINT");
//   });
// }
//  
// process.on("SIGINT", function () {
//   //graceful shutdown
//   process.exit();
//   rl.close();
// });