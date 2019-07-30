import {
    tripCreateSuccess,
    tripGetAllSuccess,
    tripFail,
    tripNull,
    tripCreateWatcher,
    tripGetWatcher,
    TRIP_CREATE_SUCCESS,
    TRIP_FAIL,
    TRIP_CREATE_WATCHER,
    TRIP_NULL,
    TRIP_GET_ALL_SUCCESS,
    TRIP_GET_ALL_WATCHER
} from '../../actions/tripAction';

describe('Trip Action --- test correctly action functionality', () => {

    it('action creator tripCreateSuccess', () => {
        const action = tripCreateSuccess({
            message: 'test message',
            success: true
        });
        expect(action).toEqual({
            type: TRIP_CREATE_SUCCESS,
            message: 'test message',
            success: true
        });
    });

    it('action creator tripGetAllSuccess', () => {
        const action = tripGetAllSuccess({
            message: 'test message',
            success: true,
            trips: ['test data']
        });
        expect(action).toEqual({
            type: TRIP_GET_ALL_SUCCESS,
            message: 'test message',
            success: true,
            trips: ['test data']
        });
    });

    it('action creator tripFail', () => {
        const action = tripFail({
            message: 'test message',
            success: false
        });
        expect(action).toEqual({
            type: TRIP_FAIL,
            message: 'test message',
            success: false
        });
    });

    it('action creator tripCreateWatcher', () => {
        const action = tripCreateWatcher({
            data: 'test data'
        });
        expect(action).toEqual({
            type: TRIP_CREATE_WATCHER,
            payload: {
                data: 'test data'
            }
        });
    });

    it('action creator tripGetWatcher', () => {
        const action = tripGetWatcher({
            data: 'test data'
        });
        expect(action).toEqual({
            type: TRIP_GET_ALL_WATCHER,
            payload: {
                data: 'test data'
            }
        });
    });
});