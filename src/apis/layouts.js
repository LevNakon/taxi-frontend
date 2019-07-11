import http from '../services/http';

export default class LayoutAPI {

    static signUp(payload) {
        return http.post(`/auth/signup`, payload);
    }

    static signIn(payload) {
        return http.post(`/auth/signin`, payload);
    }

    static userGet() {
        return http.get(`/user/info`);
    }

    static updateUser(payload) {
        return http.put(`/user/update`, payload);
    }

    static driverGet({ driverId }) {
        return http.get(`/driver/${driverId}`);
    }

    static driverCreate(payload) {
        return http.post(`/driver/create`, payload);
    }

    static driverUpdate(payload) {
        return http.put(`/driver/update`, payload);
    }

    static carGet({ carId }) {
        return http.get(`/car/${carId}`);
    }

    static carCreate(payload) {
        return http.post(`/car/create`, payload);
    }

    static carUpdate(payload) {
        return http.put(`/car/update`, payload);
    }

    static tripGetAll() {
        return http.get(`/trip/all`);
    }

    static tripCreate(payload) {
        return http.post(`/trip/create`, payload);
    }
};