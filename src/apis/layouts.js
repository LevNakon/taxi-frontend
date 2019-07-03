// import axios from 'axios';

// const root = 'http://localhost:8080';
import http from '../services/http';

export default class LayoutAPI {

    static signUp(payload) {
        return http.post(`/auth/signup`, payload);
    }

    static signIn(payload) {
        return http.post(`/auth/signin`, payload);
    }
};