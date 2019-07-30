import {
    signInSuccess,
    signInFail,
    signInNull,
    signInWatcher,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_IN_NULL,
    SIGN_IN_WATCHER
} from '../../actions/signInAction';

describe('SignIn Action --- test correctly action functionality', () => {

    it('action creator signInSuccess', () => {
        const action = signInSuccess({
            message: 'test message',
            success: true
        });
        expect(action).toEqual({
            type: SIGN_IN_SUCCESS,
            message: 'test message',
            success: true
        });
    });

    it('action creator signInFail', () => {
        const action = signInFail({
            message: 'test message',
            success: false
        });
        expect(action).toEqual({
            type: SIGN_IN_FAIL,
            message: 'test message',
            success: false
        });
    });

    it('action creator signInNull', () => {
        const action = signInNull();
        expect(action).toEqual({
            type: SIGN_IN_NULL,
            message: '',
            success: null
        });
    });

    it('action creator signInWatcher', () => {
        const action = signInWatcher({
            data: 'test data'
        });
        expect(action).toEqual({
            type: SIGN_IN_WATCHER,
            payload: {
                data: 'test data'
            }
        });
    });
});
