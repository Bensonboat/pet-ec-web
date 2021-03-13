import Vue from "vue";
import MyApp from "./MyApp.vue";
import router from "./router";
import store from "./store";
import API from './axios/api.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  API,
  render: h => h(MyApp)
}).$mount("#app");
