const path = require('path')

module.exports = {
  entry: './src/js',
  output: {
    path: path.resolve(__dirname, 'express/dist/js'),
    filename: 'bundle.js',
  }
}