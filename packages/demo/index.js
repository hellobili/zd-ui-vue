import Demo from './src/main'

/* istanbul ignore next */
Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo
