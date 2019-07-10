export const TRIP_CREATE_SUCCESS = 'TRIP_CREATE_SUCCESS';
export const TRIP_FAIL = 'TRIP_FAIL';
export const TRIP_CREATE_WATCHER = 'TRIP_CREATE_WATCHER';
export const TRIP_NULL = 'TRIP_NULL';

export const TRIP_GET_ALL_SUCCESS = 'TRIP_GET_ALL_SUCCESS';
export const TRIP_GET_ALL_WATCHER = 'TRIP_GET_ALL_WATCHER';

export function tripCreateSuccess(payload){
    return { 
        type: TRIP_CREATE_SUCCESS,
        message: payload.message,
        success: payload.success
    };
};

export function tripGetAllSuccess(payload){
    return { 
        type: TRIP_GET_ALL_SUCCESS,
        message: payload.message,
        success: payload.success,
        trips: payload.trips
    };
};

export function tripFail(payload){
    return { 
        type: TRIP_FAIL,
        message: payload.message,
        success: payload.success
    };
};

export function tripNull(){
    return { 
        type: TRIP_NULL,
        message: '',
        success: null,
        trips: null
    };
};

export function tripCreateWatcher(payload){
    return {
        type: TRIP_CREATE_WATCHER,
        payload
    }
};

export function tripGetWatcher(payload){
    return {
        type: TRIP_GET_ALL_WATCHER,
        payload
    }
};