import * as apiUrl from "./api-url";
import axios from "axios";

export default {
  // signUpAccount(data){
  //     return axios({
  //     //     method: 'POST',
  //     //     url: apiUrl.SIGN_UP_ACCOUNT,
  //     //     data
  //     })
  // },
  getProductsList(params) {
    return axios({
      method: "GET",
      url: apiUrl.PRODUCTS_DATA,
      params
    });
  },
  getSingleProduct(id) {
    return axios({
      method: "GET",
      url: `${apiUrl.PRODUCTS_DATA}/${id}`
    });
  },
  signUp(data) {
    return axios({
      method: "POST",
      url: apiUrl.SIGN_UP,
      data
    });
  },
  logIn(data) {
    return axios({
      method: "POST",
      url: apiUrl.LOG_IN,
      data
    });
  },
  getCartData(params) {
    return axios({
      method: "GET",
      url: apiUrl.CART,
      params
    });
  },
  AddCartItem(data) {
    return axios({
      method: "PUT",
      url: apiUrl.CART,
      data
    });
  },
  getAllCategories() {
    // 不限制每頁數量
    let params = {
      limit: 200
    }
    return axios({
      method: "GET",
      url: apiUrl.CATEGORIES,
      params
    });
  }
};