export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_GET_FAIL = 'USER_GET_FAIL';
export const USER_GET_WATCHER = 'USER_GET_WATCHER';
export const USER_GET_NULL = 'USER_GET_NULL';
export const CHECKER_CHANGE = 'CHECKER_CHANGE';

export function userGetSuccess(payload){
    return { 
        type: USER_GET_SUCCESS,
        message: payload.message,
        success: payload.success,
        user: payload.user
    };
};

export function userGetFail(payload){
    return { 
        type: USER_GET_FAIL,
        message: payload.message,
        success: payload.success
    };
};

export function userGetNull(){
    return { 
        type: USER_GET_NULL,
        message: '',
        success: null
    };
};

export function userGetWatcher(){
    return {
        type: USER_GET_WATCHER
    }
};

export function checkerChange(isChecked){
    return {
        type: CHECKER_CHANGE,
        isChecked
    }
};