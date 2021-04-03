export default {
  getLoadingStatus: state => {
    return state.isLoading;
  },
  getGlobalModalContent: state => {
    return state.globalModalContent
  }
  //     getAccountData: state => { return state.accountData }
};