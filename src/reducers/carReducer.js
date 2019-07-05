import { CAR_CREATE_SUCCESS, CAR_CREATE_FAIL, CAR_CREATE_NULL } from '../actions/carAction';

const initialState = { message: '', success: null, car: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case CAR_CREATE_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success,
                car: action.car 
            };
        case CAR_CREATE_FAIL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case CAR_CREATE_NULL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        default: return state;
    }
};