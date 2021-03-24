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
    },
    getSingleProduct(id){
        return axios({
            method: 'GET',
            url: `${apiUrl.PRODUCTS_DATA}/${id}`
        })
    },
    signUp(data){
        return axios({
            method: 'POST',
            url: apiUrl.SIGN_UP,
            data
        })       
    },
    logIn(data){
        return axios({
            method: 'POST',
            url: apiUrl.LOG_IN,
            data
        })       
    }
}