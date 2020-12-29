import ExampleComponent from './src/main'

/* istanbul ignore next */
ExampleComponent.install = function (Vue) {
  Vue.component(ExampleComponent.name, ExampleComponent)
}

export default ExampleComponent
