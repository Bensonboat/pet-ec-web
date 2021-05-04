//axios攔截器
import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  withCredentials: true,
  timeout: 1000 * 10,
});

// request
service.interceptors.request.use(
  config => {
    let token = localStorage.getItem('paw-front-token');
    // config.withCredentials = true;
    //如果有token則在headers統一寫入
    if (token) {
      config.headers['X-Api-Key'] = token;
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
    console.log(error, "interceptors error catch");
    return Promise.reject(error.response);
  }
);

export default service;