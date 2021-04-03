import * as types from "./mutation-types";

export default {
  [types.SHOW_PRODUCT_ALL_SPEC_MODAL](state, data) {
    state.showProductAllSpecModal = data;
  },
  [types.SET_SINGLE_PRODUCT_DATA](state, data) {
    state.singleProductData = data;
  },
  [types.SET_CART_DATA](state, data) {
    state.cartData = data;
  },
  [types.IS_LOADING](state, data) {
    state.isLoading = data;
  },
  [types.SET_MODAL_CONTENT](state, data) {
    state.globalModalContent = data
  }

  //     // didn't set any overflow at container level such as body, myApp ... because of Animation On Scroll library
  //     // so when show a modal, need to set overflow: hidden to disable scroll, and that'll cause lose current scrollTop
  //     // and jump back to top that bothers UX. That's why having this function to record current height before open a modal,
  //     // so that when close the modal, the user can stay on the same position.
  //     [types.CURRENT_SCROLL_TOP](state, data) {
  //         state.current_scroll_top = data;
  //     },
  //     [types.IS_LOADING](state, data){
  //         state.is_loading = data
  //     }
};