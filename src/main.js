import Vue from "vue";
import App from "./App.vue";

import './plugins/element.js'
import router from './router/index.js'
import store from './store'

import './icons/index' //全局引入svg-icon组件
import './styles/index.scss'//全局css

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
