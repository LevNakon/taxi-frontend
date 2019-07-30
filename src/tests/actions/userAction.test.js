import {
    userUpdateSuccess,
    userFail,
    userNull,
    userUpdateWatcher,
    userGetSuccess,
    userGetWatcher,
    checkerChange,
    USER_GET_SUCCESS,
    USER_FAIL,
    USER_GET_WATCHER,
    USER_NULL,
    CHECKER_CHANGE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_WATCHER
} from '../../actions/userAction';

describe('User Action --- test correctly action functionality', () => {

    it('action creator userUpdateSuccess', () => {
        const action = userUpdateSuccess({
            message: 'test message',
            success: true
        });
        expect(action).toEqual({
            type: USER_UPDATE_SUCCESS,
            message: 'test message',
            success: true
        });
    });

    it('action creator userFail', () => {
        const action = userFail({
            message: 'test message',
            success: false
        });
        expect(action).toEqual({
            type: USER_FAIL,
            message: 'test message',
            success: false
        });
    });

    it('action creator userNull', () => {
        const action = userNull();
        expect(action).toEqual({
            type: USER_NULL,
            message: '',
            success: null
        });
    });

    it('action creator userUpdateWatcher', () => {
        const action = userUpdateWatcher({
            data: 'test data'
        });
        expect(action).toEqual({
            type: USER_UPDATE_WATCHER,
            payload: {
                data: 'test data'
            }
        });
    });

    it('action creator userGetSuccess', () => {
        const action = userGetSuccess({
            message: 'test message',
            success: false,
            user: {
                data: 'test user data'
            }
        });
        expect(action).toEqual({
            type: USER_GET_SUCCESS,
            message: 'test message',
            success: false,
            user: {
                data: 'test user data'
            }
        });
    });

    it('action creator userGetWatcher', () => {
        const action = userGetWatcher();
        expect(action).toEqual({
            type: USER_GET_WATCHER
        });
    });

    it('action creator checkerChange', () => {
        const action = checkerChange(false);
        expect(action).toEqual({
            type: CHECKER_CHANGE,
            isChecked: false
        });
    });
});