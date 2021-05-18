// import * as types from './mutation-types';
import allApi from "@/axios/api";

// export const scrollToTop = () => {
//     let current_height = document.body.scrollTop;
//     let t = setInterval(function(){
//         if(current_height <= 0){
//             clearInterval(t)
//         }
//         current_height > 700 ? current_height = current_height = 700 : '';
//         current_height = current_height - 15
//         document.body.scrollTop = current_height
//     }, 4)
// };

// // didn't set any overflow at container level such as body, myApp ... because of Animation On Scroll library
// // so when show a modal, need to set overflow: hidden to disable scroll, and that'll cause lose current scrollTop
// // and jump back to top that bothers UX. That's why having this function to record current height before open a modal,
// // so that when close the modal, the user can stay on the same position.
// export const getScrollTop = () => {
//     let current_height = document.body.scrollTop;
//     return current_height
// }

// ========== 購物車(取得購物車資料並寫入 vuex) ==========
export const setCartData = context => {
  let id = localStorage.getItem("sessID");
  let params = {};
  if (id !== null && id !== undefined) {
    params["cartId"] = id;
  }

  context.dispatch("toggleLoading", true);
  // Always 同步資料庫購物車資料到 vuex
  allApi.getCartData(params).then(res => {
    let data = res.data.data.items;
    context.commit("SET_CART_DATA", data);
    context.dispatch("toggleLoading", false);
  });
};

export const toggleLoading = (context, is_loading) => {
  context.commit("IS_LOADING", is_loading);
};

// ========== Global Modal Content ==========
export const setGlobalModalContent = (context, data) => {
  context.commit("SET_MODAL_CONTENT", data);
};

// Collections - 加入我的最愛，存 id 在 store
export const getCollections = context => {
  return allApi.getCollections().then(res => {
    let id = res.data.data.map(item => {
      return item.id;
    });
    context.commit("SET_COLLECTIONS_ID", id);
  });
};

// 存入登入使用者資料
export const setUser = (context, data) => {
  context.commit("SET_LOG_IN_USER", data);
};