import http from '../services/http';

/**
 * Class to interact with rest api.
 */
export default class LayoutAPI {

    /**
     * POST - Sign Up - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static signUp(payload) {
        return http.post(`/auth/signup`, payload);
    }

    /**
     * POST - Sign In - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static signIn(payload) {
        return http.post(`/auth/signin`, payload);
    }

    /**
     * GET - User - Taxi Like RestAPI. 
     * 
     * @returns {Promise}
     */
    static userGet() {
        return http.get(`/user/info`);
    }

    /**
     * PUT - User Update - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static updateUser(payload) {
        return http.put(`/user/update`, payload);
    }

    /**
     * GET - Driver - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static driverGet({ driverId }) {
        return http.get(`/driver/${driverId}`);
    }

    /**
     * POST - Driver Create - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static driverCreate(payload) {
        return http.post(`/driver/create`, payload);
    }

    /**
     * PUT - Driver Update - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static driverUpdate(payload) {
        return http.put(`/driver/update`, payload);
    }

    /**
     * GET - Car - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static carGet({ carId }) {
        return http.get(`/car/${carId}`);
    }

    /**
     * POST - Car Create - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static carCreate(payload) {
        return http.post(`/car/create`, payload);
    }
    
    /**
     * PUT - Car Update - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static carUpdate(payload) {
        return http.put(`/car/update`, payload);
    }

    /**
     * GET - All Trips - Taxi Like RestAPI. 
     * 
     * @returns {Promise}
     */
    static tripGetAll() {
        return http.get(`/trip/all`);
    }

    /**
     * POST - Trip Create - Taxi Like RestAPI. 
     * 
     * @param {Object} payload
     * @returns {Promise}
     */
    static tripCreate(payload) {
        return http.post(`/trip/create`, payload);
    }
};