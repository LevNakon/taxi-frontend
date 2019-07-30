import { DRIVER_CREATE_SUCCESS, DRIVER_CREATE_FAIL, DRIVER_CREATE_NULL } from '../actions/driverAction';

const initialState = { message: '', success: null, driver: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case DRIVER_CREATE_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success,
                driver: action.driver
            };
        case DRIVER_CREATE_FAIL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case DRIVER_CREATE_NULL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        default: return state;
    }
};