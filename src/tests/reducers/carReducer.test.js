import carReducer from '../../reducers/carReducer';
import { CAR_CREATE_SUCCESS, CAR_CREATE_FAIL, CAR_CREATE_NULL } from '../../actions/carAction';

describe('Car Reducer --- test correctly reducer functionality', () => {

    it('action type CAR_CREATE_SUCCESS', () => {
        let state = { message: '', success: null, car: null };
        state = carReducer(state, {
            type: CAR_CREATE_SUCCESS,
            message: 'test message',
            success: true,
            car: {
                data: 'test data'
            }
        });
        expect(state).toEqual({
            message: 'test message',
            success: true,
            car: {
                data: 'test data'
            }
        });
    });

    it('action type CAR_CREATE_FAIL', () => {
        let state = { message: '', success: null, car: null };
        state = carReducer(state, {
            type: CAR_CREATE_FAIL,
            message: 'test message',
            success: false
        });
        expect(state).toEqual({
            message: 'test message',
            success: false,
            car: null
        });
    });

    it('action type CAR_CREATE_NULL', () => {
        let state = { message: '', success: null, car: null };
        state = carReducer(state, {
            type: CAR_CREATE_NULL,
            message: '',
            success: null
        });
        expect(state).toEqual({
            message: '',
            success: null,
            car: null
        });
    });
});