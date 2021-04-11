import * as types from "./mutation-types";

export default {
  [types.SHOW_PRODUCT_ALL_SPEC_MODAL](state, data) {
    state.showProductAllSpecModal = data;
  },
  [types.SET_SINGLE_PRODUCT_DATA](state, data) {
    state.singleProductData = data;
  },
  [types.SET_CART_DATA](state, data) {
    // console.log(state, data)
    state.cartData = data;
  },
  [types.IS_LOADING](state, data) {
    state.isLoading = data;
  },
  [types.SET_MODAL_CONTENT](state, data) {
    state.globalModalContent = data
  }
};