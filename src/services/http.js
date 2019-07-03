import axios from 'axios';

import auth from './auth';
import LOCALSTORAGE from '../constants/localsorage';

const http = axios.create({
    baseURL: 'http://localhost:8080'
});

http.interceptors.request.use((config) => {
    if (localStorage.getItem(LOCALSTORAGE.TOKEN)!==null) {
        let current_time = Date.now() / 1000;
        let expiration_time = auth.parseJwt(localStorage.getItem(LOCALSTORAGE.TOKEN)).exp;
        if (expiration_time < current_time) {
            auth.logout();
        }
        config.headers = {
            ...config.headers,
            'Authorization': 'Bearer ' + localStorage.getItem(LOCALSTORAGE.TOKEN)
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

http.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error);
    return Promise.reject(error);
});

export default http;