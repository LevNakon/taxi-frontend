export const TRIP_CREATE_SUCCESS = 'TRIP_CREATE_SUCCESS';
export const TRIP_FAIL = 'TRIP_FAIL';
export const TRIP_CREATE_WATCHER = 'TRIP_CREATE_WATCHER';
export const TRIP_NULL = 'TRIP_NULL';
export const TRIP_GET_ALL_SUCCESS = 'TRIP_GET_ALL_SUCCESS';
export const TRIP_GET_ALL_WATCHER = 'TRIP_GET_ALL_WATCHER';

/**
 * Creare action for trip reducer if trip creation is success.
 * 
 * @param {Object} payload
 * @returns {Object} - action for trip reducer if trip creation is success. 
 */
export function tripCreateSuccess(payload){
    return { 
        type: TRIP_CREATE_SUCCESS,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for trip reducer if get all trips is success.
 * 
 * @param {Object} payload
 * @returns {Object} - action for trip reducer if get all trips is success. 
 */
export function tripGetAllSuccess(payload){
    return { 
        type: TRIP_GET_ALL_SUCCESS,
        message: payload.message,
        success: payload.success,
        trips: payload.trips
    };
};

/**
 * Creare action for trip reducer if everything is failed.
 * 
 * @param {Object} payload
 * @returns {Object} - action for trip reducer if everything is failed. 
 */
export function tripFail(payload){
    return { 
        type: TRIP_FAIL,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for trip reducer to set initial state. 
 * 
 * @returns {Object} - action for trip reducer to set initial state. 
 */
export function tripNull(){
    return { 
        type: TRIP_NULL,
        message: '',
        success: null,
        trips: null
    };
};

/**
 * Creare action for trip creation saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for trip creation saga watcher. 
 */
export function tripCreateWatcher(payload){
    return {
        type: TRIP_CREATE_WATCHER,
        payload
    }
};

/**
 * Creare action for trip get saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for trip get saga watcher. 
 */
export function tripGetWatcher(payload){
    return {
        type: TRIP_GET_ALL_WATCHER,
        payload
    }
};