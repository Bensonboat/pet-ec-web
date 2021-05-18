export default {
  getLoadingStatus: state => {
    return state.isLoading;
  },
  getGlobalModalContent: state => {
    return state.globalModalContent;
  },
  getCartData: state => {
    return state.cartData;
  },
  getDetailProductData: state => {
    return state.quickAddProductData;
  },
  getCollectionsID: state => {
    return state.collectionsID;
  },
  getLoginStatus: state => {
    return state.isLogin;
  }
  //     getAccountData: state => { return state.accountData }
};