const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js',
  output: {
    path: path.resolve(__dirname, 'express/dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: ['@babel/plugin-syntax-jsx'] 
            }
          }
        ]
      }
    ]
  },
}