import { USER_GET_SUCCESS, USER_GET_FAIL, USER_GET_NULL } from '../actions/userAction';

const initialState = { message: '', success: null, user: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_GET_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success,
                user: action.user 
            };
        case USER_GET_FAIL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case USER_GET_NULL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        default: return state;
    }
};