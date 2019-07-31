export const CAR_CREATE_SUCCESS = 'CAR_CREATE_SUCCESS';
export const CAR_CREATE_FAIL = 'CAR_CREATE_FAIL';
export const CAR_CREATE_WATCHER = 'CAR_CREATE_WATCHER';
export const CAR_CREATE_NULL = 'CAR_CREATE_NULL';
export const CAR_UPDATE_WATCHER = 'CAR_UPDATE_WATCHER';


/**
 * Creare action for car reducer if everything is success.
 * 
 * @param {Object} payload
 * @returns {Object} - action for car reducer if everything is success. 
 */
export function carCreateSuccess(payload) {
    return {
        type: CAR_CREATE_SUCCESS,
        message: payload.message,
        success: payload.success,
        car: payload.car
    };
};

/**
 * Creare action for car reducer if everything is failed.
 * 
 * @param {Object} payload
 * @returns {Object} - action for car reducer if everything is failed. 
 */
export function carCreateFail(payload) {
    return {
        type: CAR_CREATE_FAIL,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for car reducer to set initial state. 
 * 
 * @returns {Object} - action for car reducer to set initial state. 
 */
export function carCreateNull() {
    return {
        type: CAR_CREATE_NULL,
        message: '',
        success: null
    };
};

/**
 * Creare action for car creation saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for car creation saga watcher. 
 */
export function carCreateWatcher(payload) {
    return {
        type: CAR_CREATE_WATCHER,
        payload
    }
};


/**
 * Creare action for car updating saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for car updating saga watcher. 
 */
export function carUpdateWatcher(payload) {
    return {
        type: CAR_UPDATE_WATCHER,
        payload
    }
};