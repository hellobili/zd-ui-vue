# 安装

## npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。
> 注意：需要切换公司内部npm库 http://192.168.4.43:8081/repository/zd_npm_public/

```shell
npm i zd-ui-vue -S --registry=http://192.168.4.43:8081/repository/zd_npm_public/
```

## 使用
```js
//  main.js
import Vue from 'vue';
import ZdUI from 'zd-ui-vue';
import 'zd-ui-vue/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ZdUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```



