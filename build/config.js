var path = require('path')
var nodeExternals = require('webpack-node-externals')
var Components = require('../components.json')

var externals = {}

Object.keys(Components).forEach(function (key) {
  externals[`zd-ui/packages/${key}`] = `zd-ui/lib/${key}`
})

externals = [Object.assign({
  vue: 'vue',
  'element-ui': 'element-ui'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  'zd-ui': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules/
