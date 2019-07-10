import { TRIP_CREATE_SUCCESS, TRIP_FAIL, TRIP_GET_ALL_SUCCESS, TRIP_NULL } from '../actions/tripAction';

const initialState = { message: '', success: null, trips: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case TRIP_CREATE_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case TRIP_GET_ALL_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: action.success,
                trips: [...action.trips]
            };
        case TRIP_FAIL:
            return {
                ...state,
                message: action.message,
                success: action.success
            };
        case TRIP_NULL:
            return {
                ...state,
                message: action.message,
                success: action.success,
                trips: null
            };
        default: return state;
    }
};