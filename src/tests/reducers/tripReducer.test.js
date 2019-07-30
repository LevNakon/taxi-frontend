import tripReducer from '../../reducers/tripReducer';
import { TRIP_CREATE_SUCCESS, TRIP_FAIL, TRIP_GET_ALL_SUCCESS, TRIP_NULL } from '../../actions/tripAction';

describe('Trip Reducer --- test correctly reducer functionality', () => {

    it('action type TRIP_CREATE_SUCCESS', () => {
        let state = { message: '', success: null, trips: null };
        state = tripReducer(state, {
            type: TRIP_CREATE_SUCCESS,
            message: 'test message',
            success: true,
        });
        expect(state).toEqual({
            message: 'test message',
            success: true,
            trips: null
        });
    });

    it('action type TRIP_GET_ALL_SUCCESS', () => {
        let state = { message: '', success: null, trips: null };
        state = tripReducer(state, {
            type: TRIP_GET_ALL_SUCCESS,
            message: 'test message',
            success: true,
            trips: ['test data']
        });
        expect(state).toEqual({
            message: 'test message',
            success: true,
            trips: ['test data']
        });
    });

    it('action type TRIP_FAIL', () => {
        let state = { message: '', success: null, trips: null };
        state = tripReducer(state, {
            type: TRIP_FAIL,
            message: 'test message',
            success: false
        });
        expect(state).toEqual({
            message: 'test message',
            success: false,
            trips: null
        });
    });

    it('action type TRIP_NULL', () => {
        let state = { message: '', success: null, trips: null };
        state = tripReducer(state, {
            type: TRIP_NULL,
            message: '',
            success: null
        });
        expect(state).toEqual({
            message: '',
            success: null,
            trips: null
        });
    });
});