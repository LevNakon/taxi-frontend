import axios from 'axios';

const root = 'http://localhost:8080';

export default class LayoutAPI {

    static signUp(payload) {
        return axios.put(`${root}/auth/signup`, payload);
    }
};