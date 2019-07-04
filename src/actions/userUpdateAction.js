export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL';
export const USER_UPDATE_WATCHER = 'USER_UPDATE_WATCHER';
export const USER_UPDATE_NULL = 'USER_UPDATE_NULL';

export function userUpdateSuccess(payload){
    return { 
        type: USER_UPDATE_SUCCESS,
        message: payload.message,
        success: payload.success
    };
};

export function userUpdateFail(payload){
    return { 
        type: USER_UPDATE_FAIL,
        message: payload.message,
        success: payload.success
    };
};

export function userUpdateNull(){
    return { 
        type: USER_UPDATE_NULL,
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