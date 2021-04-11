export default {
  getLoadingStatus: state => {
    return state.isLoading;
  },
  getGlobalModalContent: state => {
    return state.globalModalContent
  },
  getCartData: state => {
    return state.cartData
  },
  getDetailProductData: state => {
    return state.singleProductData
  }
  //     getAccountData: state => { return state.accountData }
};