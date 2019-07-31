export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
export const USER_GET_WATCHER = 'USER_GET_WATCHER';
export const USER_NULL = 'USER_NULL';
export const CHECKER_CHANGE = 'CHECKER_CHANGE';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_WATCHER = 'USER_UPDATE_WATCHER';

/**
 * Creare action for user reducer if user updating is success.
 * 
 * @param {Object} payload
 * @returns {Object} - action for user reducer if user updating is success. 
 */
export function userUpdateSuccess(payload){
    return { 
        type: USER_UPDATE_SUCCESS,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for user reducer if everything is failed.
 * 
 * @param {Object} payload
 * @returns {Object} - action for user reducer if everything is failed. 
 */
export function userFail(payload){
    return { 
        type: USER_FAIL,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for user reducer to set initial state. 
 * 
 * @returns {Object} - action for user reducer to set initial state. 
 */
export function userNull(){
    return { 
        type: USER_NULL,
        message: '',
        success: null
    };
};

/**
 * Creare action for user updating saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for user updating saga watcher. 
 */
export function userUpdateWatcher(payload){
    return {
        type: USER_UPDATE_WATCHER,
        payload
    }
};

/**
 * Creare action for user reducer if user get is success.
 * 
 * @param {Object} payload
 * @returns {Object} - action for user reducer if user get is success. 
 */
export function userGetSuccess(payload){
    return { 
        type: USER_GET_SUCCESS,
        message: payload.message,
        success: payload.success,
        user: payload.user
    };
};

/**
 * Creare action for user get saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for user get saga watcher. 
 */
export function userGetWatcher(){
    return {
        type: USER_GET_WATCHER
    }
};

/**
 * Creare action for user reducer to change checker state. 
 * 
 * @param {Boolean} isChecked
 * @returns {Object} - action for user reducer to change checker state. 
 */
export function checkerChange(isChecked){
    return {
        type: CHECKER_CHANGE,
        isChecked
    }
};