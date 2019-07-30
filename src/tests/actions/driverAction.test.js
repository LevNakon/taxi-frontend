import {
    driverCarWatcher,
    driverCarGetWatcher,
    driverCreateSuccess,
    driverCreateFail,
    driverCreateNull,
    driverCreateWatcher,
    driverUpdateWatcher,
    DRIVER_CREATE_SUCCESS,
    DRIVER_CREATE_FAIL,
    DRIVER_CREATE_WATCHER,
    DRIVER_CREATE_NULL,
    DRIVER_UPDATE_WATCHER,
    DRIVER_CAR_GET_WATCHER,
    DRIVER_CAR_WATCHER
} from '../../actions/driverAction';

describe('Driver Action --- test correctly action functionality', () => {

    it('action creator driverCarWatcher', () => {
        const action = driverCarWatcher({
            brand: 'test brand',
            model: 'test model',
            year: 2000,
            run: 20000
        });
        expect(action).toEqual({
            type: DRIVER_CAR_WATCHER,
            payload: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
    });

    it('action creator driverCarGetWatcher', () => {
        const action = driverCarGetWatcher({
            brand: 'test brand',
            model: 'test model',
            year: 2000,
            run: 20000
        });
        expect(action).toEqual({
            type: DRIVER_CAR_GET_WATCHER,
            payload: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
    });

    it('action creator driverCreateSuccess', () => {
        const action = driverCreateSuccess({
            message: 'test message',
            success: true,
            driver: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
        expect(action).toEqual({
            type: DRIVER_CREATE_SUCCESS,
            message: 'test message',
            success: true,
            driver: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
    });

    it('action creator driverCreateFail', () => {
        const action = driverCreateFail({
            message: 'test message',
            success: false
        });
        expect(action).toEqual({
            type: DRIVER_CREATE_FAIL,
            message: 'test message',
            success: false
        });
    });

    it('action creator driverCreateNull', () => {
        const action = driverCreateNull({
            message: '',
            success: null
        });
        expect(action).toEqual({
            type: DRIVER_CREATE_NULL,
            message: '',
            success: null
        });
    });

    it('action creator driverCreateWatcher', () => {
        const action = driverCreateWatcher({
            brand: 'test brand',
            model: 'test model',
            year: 2000,
            run: 20000
        });
        expect(action).toEqual({
            type: DRIVER_CREATE_WATCHER,
            payload: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
    });

    it('action creator driverUpdateWatcher', () => {
        const action = driverUpdateWatcher({
            brand: 'test brand',
            model: 'test model',
            year: 2000,
            run: 20000
        });
        expect(action).toEqual({
            type: DRIVER_UPDATE_WATCHER,
            payload: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
    });
});