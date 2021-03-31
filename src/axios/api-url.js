// 帳號註冊
// export const SIGN_UP_ACCOUNT = '/api/employee'

const BASE_URL = process.env.VUE_APP_URL;

// 產品
export const PRODUCTS_DATA = BASE_URL + '/products'

// 註冊
export const SIGN_UP = BASE_URL + '/auth/register'

// 登入
export const LOG_IN = BASE_URL + '/auth/login'

// 購物車
export const CART = BASE_URL + '/cart'

// 類別
export const CATEGORIES = BASE_URL + '/categories'