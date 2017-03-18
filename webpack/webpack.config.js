const fs = require('fs');
const PATHS = require('./paths');
const rules = require('./rules');
const plugins = require('./plugins');
const externals = require('./externals');
const resolve = require('./resolve');

module.exports = (env = '') =>{
  const isProduction = process.env.NODE_ENV === 'production';
  const isBrowser = (env.indexOf('browser') >= 0);
  console.log(`Running webpack in ${process.env.NODE_ENV} mode on ${isBrowser ? 'browser':'server'}`);

  const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout20000&reload=true';
  const node = { __dirname: true, __filename: true };

const prodServerRender = {
    devtool: 'source-map',
    context: PATHS.app,
    entry: { server: '../server/index' },
    target: 'node',
    node,
    externals,
    output: {
      path: PATHS.compiled,
      filename: '[name].js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2'
    },
    module: { rules: rules({ production: true, browser: false }) },
    resolve,
    plugins: plugins({ production: true, browser: false })
  };

  const prodBrowserRender = {
    devtool: 'cheap-module-source-map',
    context: PATHS.app,
    entry: { app: ['./client'] },
    node,
    output: {
      path: PATHS.assets,
      filename: '[name].js', // filename: '[name].[hash:6].js',
      chunkFilename: '[name].[chunkhash:6].js', // for code splitting. will work without but useful to set
      publicPath: PATHS.public
    },
    module: { rules: rules({ production: true, browser: true }) },
    resolve,
    plugins: plugins({ production: true, browser: true })
  };

  const devBrowserRender = {
    devtool: 'eval',
    context: PATHS.app,
    entry: { app: ['./client', hotMiddlewareScript] },
    node,
    output: {
      path: PATHS.assets,
      filename: '[name].js',
      publicPath: PATHS.public
    },
    module: { rules: rules({ production: false, browser: true }) },
    resolve,
    plugins: plugins({ production: false, browser: true })
  };

  const devServerRender = {
    devtool: 'sourcemap',
    context: PATHS.app,
    entry: { server: '../server/index' },
    target: 'node',
    node,
    externals,
    output: {
      path: PATHS.compiled,
      filename: '[name].dev.js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2',
    },
    module: { rules: rules({ production: false, browser: false }) },
    resolve,
    plugins: plugins({ production: false, browser: false })
  };

  const prodConfig = [prodBrowserRender, prodServerRender];
  const devConfig = isBrowser ? devBrowserRender : devServerRender;
  const configuration = isProduction ? prodConfig : devConfig;

  return configuration;
};

// let path = require('path');
// let webpack = require('webpack');
// let config = {
//   /*
//    * app.ts represents the entry point to your web application. Webpack will
//    * recursively go through every "require" statement in app.ts and
//    * efficiently build out the application's dependency tree.
//    */
//   entry: [
//     "webpack-dev-server/client?http://localhost:8080",
//     "webpack/hot/only-dev-server",
//     "./src/main/index.tsx"
//     ],
//   /*
//    * The combination of path and filename tells Webpack what name to give to
//    * the final bundled JavaScript file and where to store this file.
//    */
//   output: {
//     // path: path.resolve(__dirname, "build"),
//     path: path.join(__dirname, 'build'),
//     publicPath : '/build/',
//     filename: "bundle.js"
//   },

//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('production')
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       compress:{
//         warnings: false
//       }
//     })
//   ],
//   /*
//    * resolve lets Webpack now in advance what file extensions you plan on
//    * "require"ing into the web application, and allows you to drop them
//    * in your code.
//    */
//   resolve: {
//     extensions: ["", ".ts", ".tsx", ".js"]
//   },
//   module: {
//     /*
//      * Each loader needs an associated Regex test that goes through each
//      * of the files you've included (or in this case, all files but the
//      * ones in the excluded directories) and finds all files that pass
//      * the test. Then it will apply the loader to that file. I haven't
//      * installed ts-loader yet, but will do that shortly.
//      */
//     loaders: [
//       {
//         test: /\.tsx?$/,
//         loader: "ts-loader",
//         exclude: /node_modules/
//       },
//       {
//         test: /\.js?$/,
//         loader: "react-hot!babel",
//         exclude: /node_modules/,
//         include: path.join(__dirname, 'src')
//       },{
//         test: /\.scss$/,
//         include: path.join(__dirname,'src'),
//         loader: 'style!css!sass'
//       }
//     ]
//   }
// };

// module.exports = config;