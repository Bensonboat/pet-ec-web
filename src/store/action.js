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

// ========== 購物車 ==========
export const getCartData = context => {
  allApi.getCartData().then(res => {
    let data = res.data.data.items;
    console.log(data, "actions");
    context.commit("GET_CART_DATA", data);
  });
};

export const toggleLoading = (context, is_loading) => {
  context.commit("IS_LOADING", is_loading);
};
