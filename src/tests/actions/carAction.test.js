import {
    carCreateSuccess,
    carCreateFail,
    carCreateNull,
    carCreateWatcher,
    carUpdateWatcher,
    CAR_CREATE_FAIL,
    CAR_CREATE_NULL,
    CAR_CREATE_SUCCESS,
    CAR_CREATE_WATCHER,
    CAR_UPDATE_WATCHER
} from '../../actions/carAction';

describe('Car Action --- test correctly action functionality', () => {

    it('action creator carCreateSuccess', () => {
        const action = carCreateSuccess({
            message: 'test message',
            success: true,
            car: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
        expect(action).toEqual({
            type: CAR_CREATE_SUCCESS,
            message: 'test message',
            success: true,
            car: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
    });

    it('action creator carCreateFail', () => {
        const action = carCreateFail({
            message: 'test message',
            success: true
        });
        expect(action).toEqual({
            type: CAR_CREATE_FAIL,
            message: 'test message',
            success: true
        });
    });

    it('action creator carCreateNull', () => {
        const action = carCreateNull();
        expect(action).toEqual({
            type: CAR_CREATE_NULL,
            message: '',
            success: null
        });
    });

    it('action creator carCreateWatcher', () => {
        const action = carCreateWatcher({
            brand: 'test brand',
            model: 'test model',
            year: 2000,
            run: 20000
        });
        expect(action).toEqual({
            type: CAR_CREATE_WATCHER,
            payload: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
    });

    it('action creator carUpdateWatcher', () => {
        const action = carUpdateWatcher({
            brand: 'test brand',
            model: 'test model',
            year: 2000,
            run: 20000
        });
        expect(action).toEqual({
            type: CAR_UPDATE_WATCHER,
            payload: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000
            }
        });
    });
});