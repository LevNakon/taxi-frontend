export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
export const SIGN_IN_WATCHER = 'SIGN_IN_WATCHER';
export const SIGN_IN_NULL = 'SIGN_IN_NULL';

/**
 * Creare action for sign in reducer if everything is success.
 * 
 * @param {Object} payload
 * @returns {Object} - action for sign in reducer if everything is success. 
 */
export function signInSuccess(payload){
    return { 
        type: SIGN_IN_SUCCESS,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for sign in reducer if everything is failed.
 * 
 * @param {Object} payload
 * @returns {Object} - action for sign in reducer if everything is failed. 
 */
export function signInFail(payload){
    return { 
        type: SIGN_IN_FAIL,
        message: payload.message,
        success: payload.success
    };
};

/**
 * Creare action for sign in reducer to set initial state. 
 * 
 * @returns {Object} - action for sign in reducer to set initial state. 
 */
export function signInNull(){
    return { 
        type: SIGN_IN_NULL,
        message: '',
        success: null
    };
};

/**
 * Creare action for sign in saga watcher. 
 * 
 * @param {Object} payload
 * @returns {Object} - action for sign in saga watcher. 
 */
export function signInWatcher(payload){
    return {
        type: SIGN_IN_WATCHER,
        payload
    }
};