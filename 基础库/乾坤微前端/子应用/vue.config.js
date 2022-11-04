const HtmlWebpackPlugin = require('html-webpack-plugin')
const addSelectorPrefix = require('./addSelectorPrefix')
module.exports = {
  // 线上采用绝对路径，cdn路径一定要支持跨域访问
  // 开发环境采用相对路径即可
  publicPath: process.env.VUE_APP_ENV === 'development' ? '' : 'https://cdn-static.dupdub.com/frontend/dupdub-editor/prd/',
  configureWebpack: {
    plugins: [
      {
        apply(compiler) {
          //当html模版中有多个脚本时指定唯一的entry，配合import-html-entry使用
          compiler.hooks.compilation.tap('html-webpack-entry-script-plugin', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync('html-webpack-entry-script-plugin', (data, cb) => {
              data.assetTags.scripts = data.assetTags.scripts.map(s => {
                if (s.attributes && s.attributes.src && /\/index\./.test(s.attributes.src)) {
                  s.attributes.entry = true
                }
                return s
              })
              cb(null, data)
            })
          })
        }
      }
    ],
    output: {
      // umd格式，让qiankun能拿到export的函数
      library: "dupdubEditorApp",
      libraryTarget: "umd",
      chunkLoadingGlobal: 'chunkLoadingGlobal_dupdubEditorApp',
    }
  },
  devServer: {
    headers: {
      // 开发环境允许静态资源跨域访问，注意上线时，线上的静态资源也要允许跨域访问，因为qiankun是用ajax去拉取各种资源的
      'Access-Control-Allow-Origin': '*',
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            addSelectorPrefix
          ]
        }
      }
    }
  },
}


