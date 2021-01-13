// import ZdUI from '../../src/index.js'
// import "../../packages/theme-chalk/src/index.scss"
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import ZdUI from '../../lib/index'
import '../../lib/theme-chalk/index.css'

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(ZdUI)
  Vue.use(Element)
}
