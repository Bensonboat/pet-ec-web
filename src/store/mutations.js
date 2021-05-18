import * as types from "./mutation-types";

export default {
  [types.SHOW_PRODUCT_ALL_SPEC_MODAL](state, data) {
    state.showProductAllSpecModal = data;
  },
  [types.SET_QUICK_ADD_PRODUCT_DATA](state, data) {
    state.quickAddProductData = data;
  },
  [types.SET_CART_DATA](state, data) {
    // console.log(state, data)
    state.cartData = data;
  },
  [types.IS_LOADING](state, data) {
    state.isLoading = data;
  },
  [types.SET_MODAL_CONTENT](state, data) {
    state.globalModalContent = data;
  },
  [types.SET_COLLECTIONS_ID](state, data) {
    state.collectionsID = data;
  },
  [types.SET_LOG_IN_USER](state, data) {
    state.logInUserData = data;
  },
  [types.SET_LOGIN_STATUS](state, data) {
    state.isLogin = data
  }
};