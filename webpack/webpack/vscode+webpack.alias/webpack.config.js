const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};