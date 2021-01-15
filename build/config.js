var path = require('path')
var nodeExternals = require('webpack-node-externals')
var Components = require('../components.json')
const { name: npmName } = require('../package.json')

exports.npmName = npmName

var externals = {}

Object.keys(Components).forEach(function (key) {
  externals[`${npmName}/packages/${key}`] = `${npmName}/lib/${key}`
})

externals = [Object.assign({
  vue: 'vue',
  'element-ui': 'element-ui'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  [npmName]: path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules/
