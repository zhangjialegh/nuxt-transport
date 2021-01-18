const path = require('path')

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./index.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "lib"), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "index.js", // string (default)
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js/, //babel转化es6到es5
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 2
                }
              ]
            ]
          }
        }
      }
    ]
  }
}