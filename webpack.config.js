const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    sunfish: './src/js/sunfish/index.jsx',
    emperorAngelfish: "./src/js/emperorAngelfish/index.jsx"
  }
  ,
  output: {
    filename: '[name]/[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
        }
      }
    ]
  },
}