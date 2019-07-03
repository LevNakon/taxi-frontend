import { SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_IN_NULL } from '../actions/signInAction';

const initialState = { message: '', success: null, userId: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success,
                userId: action.userId
            };
        case SIGN_IN_FAIL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case SIGN_IN_NULL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        default: return state;
    }
};