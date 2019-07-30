import signUpReducer from '../../reducers/signUpReducer';
import { SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_UP_NULL } from '../../actions/signUpAction';

describe('SignUp Reducer --- test correctly reducer functionality', () => {

    it('action type SIGN_UP_SUCCESS', () => {
        let state = { message: '', success: null };
        state = signUpReducer(state, {
            type: SIGN_UP_SUCCESS,
            message: 'test message',
            success: true
        });
        expect(state).toEqual({
            message: 'test message',
            success: true
        });
    });

    it('action type SIGN_UP_FAIL', () => {
        let state = { message: '', success: null };
        state = signUpReducer(state, {
            type: SIGN_UP_FAIL,
            message: 'test message',
            success: false
        });
        expect(state).toEqual({
            message: 'test message',
            success: false
        });
    });

    it('action type SIGN_UP_NULL', () => {
        let state = { message: '', success: null };
        state = signUpReducer(state, {
            type: SIGN_UP_NULL,
            message: '',
            success: null
        });
        expect(state).toEqual({
            message: '',
            success: null
        });
    });
});