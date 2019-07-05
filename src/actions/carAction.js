export const CAR_CREATE_SUCCESS = 'CAR_CREATE_SUCCESS';
export const CAR_CREATE_FAIL = 'CAR_CREATE_FAIL';
export const CAR_CREATE_WATCHER = 'CAR_CREATE_WATCHER';
export const CAR_CREATE_NULL = 'CAR_CREATE_NULL';

export function carCreateSuccess(payload){
    return { 
        type: CAR_CREATE_SUCCESS,
        message: payload.message,
        success: payload.success,
        car: payload.car
    };
};

export function carCreateFail(payload){
    return { 
        type: CAR_CREATE_FAIL,
        message: payload.message,
        success: payload.success
    };
};

export function carCreateNull(){
    return { 
        type: CAR_CREATE_NULL,
        message: '',
        success: null
    };
};

export function carCreateWatcher(payload){
    return {
        type: CAR_CREATE_WATCHER,
        payload
    }
};