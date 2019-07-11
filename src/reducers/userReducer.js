import { USER_UPDATE_SUCCESS, USER_GET_SUCCESS, USER_FAIL, USER_NULL, CHECKER_CHANGE } from '../actions/userAction';

const initialState = { message: '', success: null, user: null, isChecked: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_GET_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success,
                user: action.user
            };
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case USER_FAIL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case USER_NULL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case CHECKER_CHANGE:
            return {
                ...state,
                isChecked: action.isChecked
            };
        default: return state;
    }
};
