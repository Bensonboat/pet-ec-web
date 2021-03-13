import * as apiUrl from './api-url';
import axios from 'axios'

export default {
    // signUpAccount(data){
    //     return axios({
    //     //     method: 'POST',
    //     //     url: apiUrl.SIGN_UP_ACCOUNT,
    //     //     data
    //     })
    // },
    getProductsList(){
        return axios({
            method: 'GET',
            url: apiUrl.PRODUCTS_DATA,
        })
    }
}