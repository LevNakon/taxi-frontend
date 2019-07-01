export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const SIGN_UP_WATCHER = 'SIGN_UP_WATCHER';

export function signUpSuccess(payload){
    return { 
        type: SIGN_UP_SUCCESS,
        message: payload.message,
        userId: payload.userId
    };
};

export function signUpFail(payload){
    return { 
        type: SIGN_UP_FAIL,
        message: payload.message,
        data: payload.data
    };
};

export function signUpWatcher(authParams){
    return {
        type: SIGN_UP_WATCHER,
        payload: authParams
    }
};