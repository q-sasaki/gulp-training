const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    sunfish: './src/js/sunfish',
    emperorAngelfish: "./src/js/emperorAngelfish/sample.jsx"
  }
  ,
  output: {
    filename: '[name].bundle.js',
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