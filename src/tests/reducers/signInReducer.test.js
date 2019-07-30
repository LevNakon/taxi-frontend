import signInReducer from '../../reducers/signInReducer';
import { SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_IN_NULL } from '../../actions/signInAction';

describe('SignIn Reducer --- test correctly reducer functionality', () => {

    it('action type SIGN_IN_SUCCESS', () => {
        let state = { message: '', success: null };
        state = signInReducer(state, {
            type: SIGN_IN_SUCCESS,
            message: 'test message',
            success: true
        });
        expect(state).toEqual({
            message: 'test message',
            success: true
        });
    });

    it('action type SIGN_IN_FAIL', () => {
        let state = { message: '', success: null };
        state = signInReducer(state, {
            type: SIGN_IN_FAIL,
            message: 'test message',
            success: false
        });
        expect(state).toEqual({
            message: 'test message',
            success: false
        });
    });

    it('action type SIGN_IN_NULL', () => {
        let state = { message: '', success: null };
        state = signInReducer(state, {
            type: SIGN_IN_NULL,
            message: '',
            success: null
        });
        expect(state).toEqual({
            message: '',
            success: null
        });
    });
});