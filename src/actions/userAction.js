export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
export const USER_GET_WATCHER = 'USER_GET_WATCHER';
export const USER_NULL = 'USER_NULL';
export const CHECKER_CHANGE = 'CHECKER_CHANGE';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_WATCHER = 'USER_UPDATE_WATCHER';

export function userUpdateSuccess(payload){
    return { 
        type: USER_UPDATE_SUCCESS,
        message: payload.message,
        success: payload.success
    };
};

export function userFail(payload){
    return { 
        type: USER_FAIL,
        message: payload.message,
        success: payload.success
    };
};

export function userNull(){
    return { 
        type: USER_NULL,
        message: '',
        success: null
    };
};

export function userUpdateWatcher(payload){
    return {
        type: USER_UPDATE_WATCHER,
        payload
    }
};

export function userGetSuccess(payload){
    return { 
        type: USER_GET_SUCCESS,
        message: payload.message,
        success: payload.success,
        user: payload.user
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