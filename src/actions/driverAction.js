export const DRIVER_CREATE_SUCCESS = 'DRIVER_CREATE_SUCCESS';
export const DRIVER_CREATE_FAIL = 'DRIVER_CREATE_FAIL';
export const DRIVER_CREATE_WATCHER = 'DRIVER_CREATE_WATCHER';
export const DRIVER_CREATE_NULL = 'DRIVER_CREATE_NULL';

export function driverCreateSuccess(payload){
    return { 
        type: DRIVER_CREATE_SUCCESS,
        message: payload.message,
        success: payload.success,
        driver: payload.driver
    };
};

export function driverCreateFail(payload){
    return { 
        type: DRIVER_CREATE_FAIL,
        message: payload.message,
        success: payload.success
    };
};

export function driverCreateNull(){
    return { 
        type: DRIVER_CREATE_NULL,
        message: '',
        success: null
    };
};

export function driverCreateWatcher(payload){
    return {
        type: DRIVER_CREATE_WATCHER,
        payload
    }
};