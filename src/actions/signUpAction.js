export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const SIGN_UP_WATCHER = 'SIGN_UP_WATCHER';
export const SIGN_UP_NULL = 'SIGN_UP_NULL';

/**
 * Creare action for sign up reducer if everything is success.
 * 
 * @param {Object} payload
 * @returns {Object} - action for sign up reducer if everything is success. 
 */
export function signUpSuccess(payload){
    return { 
        type: SIGN_UP_SUCCESS,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for sign up reducer if everything is failed.
 * 
 * @param {Object} payload
 * @returns {Object} - action for sign up reducer if everything is failed. 
 */
export function signUpFail(payload){
    return { 
        type: SIGN_UP_FAIL,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for sign up reducer to set initial state. 
 * 
 * @returns {Object} - action for sign up reducer to set initial state. 
 */
export function signUpNull(){
    return { 
        type: SIGN_UP_NULL,
        message: '',
        success: null
    };
};

/**
 * Creare action for sign up saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for sign up saga watcher. 
 */
export function signUpWatcher(payload){
    return {
        type: SIGN_UP_WATCHER,
        payload
    }
};