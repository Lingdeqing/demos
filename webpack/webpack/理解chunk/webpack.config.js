const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


class FileListPlugin {
  apply(compiler) {
    // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    compiler.hooks.done.tapAsync('FileListPlugin', (compilation, callback) => {
      // Create a header string for the generated file:
      var filelist = 'In this build:\n\n';

      // Loop through all compiled assets,
      // adding a new line item for each filename.
      for (var chunk of compilation.chunks) {
        console.log('chunk name: ', chunk.name)
      }
      for (var filename in compilation.assets) {
        filelist += '- ' + filename + '\n';
        console.log('asset filename: ', filename)
      }

      // Insert this list into the webpack build as a new file asset:
      // compilation.assets['filelist.md'] = {
      //   source: function() {
      //     return filelist;
      //   },
      //   size: function() {
      //     return filelist.length;
      //   }
      // };

      callback();
    });
  }
}

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    // new FileListPlugin()
  ]
};