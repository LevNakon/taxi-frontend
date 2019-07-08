export const DRIVER_CAR_WATCHER = 'DRIVER_CAR_WATCHER';
export const DRIVER_CAR_GET_WATCHER = 'DRIVER_CAR_GET_WATCHER';

export function driverCarWatcher(payload){
    return {
        type: DRIVER_CAR_WATCHER,
        payload
    }
};

export function driverCarGetWatcher(payload){
    return {
        type: DRIVER_CAR_GET_WATCHER,
        payload
    }
};

export function setDriverSatus(payload){
    return
}