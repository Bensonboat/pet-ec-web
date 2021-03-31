import Vue from "vue";
import MyApp from "./MyApp.vue";
import router from "./router";
import store from "./store";
import axios from './axios/interceptors'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

import API from '@/axios/api';
Vue.prototype.$api = API;

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  axios,
  render: h => h(MyApp)
}).$mount("#app");
