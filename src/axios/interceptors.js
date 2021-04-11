//axios攔截器
import axios from "axios";

// request
axios.interceptors.request.use(
  config => {
    config.withCredentials = true;
    //如果有token則在headers統一寫入
    // if (token) {
    //     config.headers.Authorization = `${token}`;
    //     loading(true)
    // }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error, "interceptors error catch");
    return Promise.reject(error.response);
  }
);

export default axios;