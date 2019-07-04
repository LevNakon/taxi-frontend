import { USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_NULL } from '../actions/userUpdateAction';

const initialState = { message: '', success: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case USER_UPDATE_FAIL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case USER_UPDATE_NULL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        default: return state;
    }
};