import {
    signUpSuccess,
    signUpFail,
    signUpNull,
    signUpWatcher,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_NULL,
    SIGN_UP_WATCHER
} from '../../actions/signUpAction';

describe('SignIn Action --- test correctly action functionality', () => {

    it('action creator signUpSuccess', () => {
        const action = signUpSuccess({
            message: 'test message',
            success: true
        });
        expect(action).toEqual({
            type: SIGN_UP_SUCCESS,
            message: 'test message',
            success: true
        });
    });

    it('action creator signUpFail', () => {
        const action = signUpFail({
            message: 'test message',
            success: false
        });
        expect(action).toEqual({
            type: SIGN_UP_FAIL,
            message: 'test message',
            success: false
        });
    });

    it('action creator signUpNull', () => {
        const action = signUpNull();
        expect(action).toEqual({
            type: SIGN_UP_NULL,
            message: '',
            success: null
        });
    });

    it('action creator signUpWatcher', () => {
        const action = signUpWatcher({
            data: 'test data'
        });
        expect(action).toEqual({
            type: SIGN_UP_WATCHER,
            payload: {
                data: 'test data'
            }
        });
    });
});
