const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  // assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        main: resolve('src'),
        examples: resolve('examples')
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
  }
  // chainWebpack: config => {
  //   config.module
  //     .rules('js')
  //     .include
  //     .add(resolve('src'))
  //     .end()
  //     .use('babel')
  //     .loader('babel-loader')
  //     .tap(options => {
  //       return options
  //     })
  // }
}
