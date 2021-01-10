const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

// const Components = require('./components.json')

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? './' : '/dist/',
  outputDir: 'lib',
  // assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    // entry: process.env.NODE_ENV === 'production' ? Components : '',
    resolve: {
      alias: {
        main: resolve('src'),
        examples: resolve('examples')
      }
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[id].js',
      libraryTarget: 'commonjs2'
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    },
    performance: {
      hints: false
    }
  },

  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'

    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
  }
}
