import userReducer from '../../reducers/userReducer';
import { USER_UPDATE_SUCCESS, USER_GET_SUCCESS, USER_FAIL, USER_NULL, CHECKER_CHANGE } from '../../actions/userAction';

describe('User Reducer --- test correctly reducer functionality', () => {

    it('action type USER_UPDATE_SUCCESS', () => {
        let state = { message: '', success: null, user: null, isChecked: false };
        state = userReducer(state, {
            type: USER_UPDATE_SUCCESS,
            message: 'test message',
            success: true
        });
        expect(state).toEqual({
            message: 'test message',
            success: true,
            user: null,
            isChecked: false
        });
    });

    it('action type USER_GET_SUCCESS', () => {
        let state = { message: '', success: null, user: null, isChecked: false };
        state = userReducer(state, {
            type: USER_GET_SUCCESS,
            message: 'test message',
            success: true,
            user: {
                data: 'test data'
            }
        });
        expect(state).toEqual({
            message: 'test message',
            success: true,
            user: {
                data: 'test data'
            },
            isChecked: false
        });
    });

    it('action type USER_FAIL', () => {
        let state = { message: '', success: null, user: null, isChecked: false };
        state = userReducer(state, {
            type: USER_FAIL,
            message: 'test message',
            success: false
        });
        expect(state).toEqual({
            message: 'test message',
            success: false,
            user: null,
            isChecked: false
        });
    });

    it('action type USER_NULL', () => {
        let state = { message: '', success: null, user: null, isChecked: false };
        state = userReducer(state, {
            type: USER_NULL,
            message: '',
            success: null
        });
        expect(state).toEqual({
            message: '',
            success: null,
            user: null,
            isChecked: false
        });
    });

    it('action type CHECKER_CHANGE', () => {
        let state = { message: '', success: null, user: null, isChecked: false };
        state = userReducer(state, {
            type: CHECKER_CHANGE,
            isChecked: false
        });
        expect(state).toEqual({
            message: '',
            success: null,
            user: null,
            isChecked: false
        });
    });
});