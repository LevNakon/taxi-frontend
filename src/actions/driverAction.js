export const DRIVER_CREATE_SUCCESS = 'DRIVER_CREATE_SUCCESS';
export const DRIVER_CREATE_FAIL = 'DRIVER_CREATE_FAIL';
export const DRIVER_CREATE_WATCHER = 'DRIVER_CREATE_WATCHER';
export const DRIVER_CREATE_NULL = 'DRIVER_CREATE_NULL';
export const DRIVER_UPDATE_WATCHER = 'DRIVER_UPDATE_WATCHER';
export const DRIVER_CAR_WATCHER = 'DRIVER_CAR_WATCHER';
export const DRIVER_CAR_GET_WATCHER = 'DRIVER_CAR_GET_WATCHER';

/**
 * Creare action for car and driver reducer creation saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for car and driver reducer creation saga watcher. 
 */
export function driverCarWatcher(payload) {
    return {
        type: DRIVER_CAR_WATCHER,
        payload
    }
};

/**
 * Creare action for car and driver reducer get saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for car and driver reducer get saga watcher. 
 */
export function driverCarGetWatcher(payload) {
    return {
        type: DRIVER_CAR_GET_WATCHER,
        payload
    }
};

/**
 * Creare action for driver reducer if everything is success.
 * 
 * @param {Object} payload
 * @returns {Object} - action for driver reducer if everything is success. 
 */
export function driverCreateSuccess(payload) {
    return {
        type: DRIVER_CREATE_SUCCESS,
        message: payload.message,
        success: payload.success,
        driver: payload.driver
    };
};

/**
 * Creare action for driver reducer if everything is failed.
 * 
 * @param {Object} payload
 * @returns {Object} - action for driver reducer if everything is failed. 
 */
export function driverCreateFail(payload) {
    return {
        type: DRIVER_CREATE_FAIL,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for driver reducer to set initial state. 
 * 
 * @returns {Object} - action for driver reducer to set initial state. 
 */
export function driverCreateNull() {
    return {
        type: DRIVER_CREATE_NULL,
        message: '',
        success: null
    };
};

/**
 * Creare action for driver creation saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for driver creation saga watcher. 
 */
export function driverCreateWatcher(payload) {
    return {
        type: DRIVER_CREATE_WATCHER,
        payload
    }
};

/**
 * Creare action for driver updating saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for driver updating saga watcher. 
 */
export function driverUpdateWatcher(payload) {
    return {
        type: DRIVER_UPDATE_WATCHER,
        payload
    }
};