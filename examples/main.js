import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ZdUI from '../src/index'

Vue.use(ZdUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
