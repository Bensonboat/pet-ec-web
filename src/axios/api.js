import * as apiUrl from "./api-url";
import axios from "./interceptors";

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
  logOut() {
    return axios({
      method: "POST",
      url: apiUrl.LOG_OUT
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
    };
    return axios({
      method: "GET",
      url: apiUrl.CATEGORIES,
      params
    });
  },
  createOrders(data) {
    return axios({
      method: "POST",
      url: apiUrl.ORDERS,
      data
    });
  },
  getUsers() {
    return axios({
      method: "GET",
      url: apiUrl.USERS
    });
  },
  updateUserData(data) {
    return axios({
      method: "PUT",
      url: apiUrl.USERS,
      data
    });
  },
  getCollections() {
    return axios({
      method: "GET",
      url: apiUrl.COLLECTIONS
    });
  },
  addToCollections(data) {
    return axios({
      method: "POST",
      url: apiUrl.COLLECTIONS,
      data
    });
  },
  removeCollection(id) {
    return axios({
      method: "DELETE",
      url: apiUrl.COLLECTIONS + `/${id}`,
      data: {
        status: 0
      }
    });
  },
  getPetData() {
    return axios({
      method: "GET",
      url: apiUrl.PET
    });
  },
  createPetData(data) {
    return axios({
      method: "POST",
      url: apiUrl.PET,
      data
    });
  },
  updatePetData(data) {
    return axios({
      method: "PUT",
      url: apiUrl.PET + `/${data.id}`,
      data
    });
  },
  getTags() {
    return axios({
      method: 'GET',
      url: apiUrl.TAGS
    })
  }
};