//axios攔截器
import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  withCredentials: true,
  timeout: 1000 * 10
});

// request
service.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem("paw-front-token");
    // config.withCredentials = true;
    //如果有token則在headers統一寫入
    if (token) {
      config.headers["X-Api-Key"] = token;
      // loading(true)
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.code === 3002) {
      this.$store.dispatch('setLoginStatus', false)
    } else {
      return Promise.reject(error.response);
    }

    // console.log(error.response, "interceptors error catch");
    // return Promise.reject(error.response);
  }
);

export default service;