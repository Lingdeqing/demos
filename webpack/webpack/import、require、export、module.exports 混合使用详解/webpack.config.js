const path = require('path');

module.exports = {
  mode: 'production',
  entry: './a.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // libraryTarget: 'commonjs2',
    // library: 'spon-ui',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { 
              // modules: 'commonjs' 
              modules: false
            }]],
          }
        }
      }
    ]
  }
};