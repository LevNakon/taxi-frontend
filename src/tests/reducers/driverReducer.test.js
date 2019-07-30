import driverReducer from '../../reducers/driverReducer';
import { DRIVER_CREATE_SUCCESS, DRIVER_CREATE_FAIL, DRIVER_CREATE_NULL } from '../../actions/driverAction';

describe('Driver Reducer --- test correctly reducer functionality', () => {

    it('action type DRIVER_CREATE_SUCCESS', () => {
        let state = { message: '', success: null, driver: null };
        state = driverReducer(state, {
            type: DRIVER_CREATE_SUCCESS,
            message: 'test message',
            success: true,
            driver: {
                data: 'test data'
            }
        });
        expect(state).toEqual({
            message: 'test message',
            success: true,
            driver: {
                data: 'test data'
            }
        });
    });

    it('action type DRIVER_CREATE_FAIL', () => {
        let state = { message: '', success: null, driver: null };
        state = driverReducer(state, {
            type: DRIVER_CREATE_FAIL,
            message: 'test message',
            success: false
        });
        expect(state).toEqual({
            message: 'test message',
            success: false,
            driver: null
        });
    });

    it('action type DRIVER_CREATE_NULL', () => {
        let state = { message: '', success: null, driver: null };
        state = driverReducer(state, {
            type: DRIVER_CREATE_NULL,
            message: '',
            success: null
        });
        expect(state).toEqual({
            message: '',
            success: null,
            driver: null
        });
    });
});