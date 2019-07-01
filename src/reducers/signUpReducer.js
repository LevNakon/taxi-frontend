import { SIGN_UP_SUCCESS, SIGN_UP_FAIL } from '../actions/signUpActions';

const initialState = { message: '', userId: null, data: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                message: action.message,
                userId: action.userId
            };
        case SIGN_UP_FAIL:
            return {
                ...state,
                message: action.message,
                data: action.data,
            };
        default: return state;
    }
};