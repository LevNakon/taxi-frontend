export const DRIVER_CAR_WATCHER = 'DRIVER_CAR_WATCHER';

export function driverCarWatcher(payload){
    return {
        type: DRIVER_CAR_WATCHER,
        payload
    }
};