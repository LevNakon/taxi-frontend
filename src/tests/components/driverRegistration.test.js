import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import DriverRegistration from '../../components/driverRegistration';

describe('DriverRegistration --- test render correctly component', () => {
    const initialState = {
        carState:{
            message: '',
            success: true,
            car: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000,
            }
        },
        driverState: {
            message: '',
            success: true,
            driver: {
                experience: 0,
                condition: 'COMFORT',
            }
        }
    };
    const mockStore = configureStore();
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<DriverRegistration store={store} />);
    });

    it('render correctly component DriverRegistration', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('successDriver')).toEqual(initialState.driverState.success);
        expect(wrapper.dive().prop('messageDriver')).toEqual(initialState.driverState.message);
        expect(wrapper.dive().prop('driver')).toEqual(initialState.driverState.driver);
        expect(wrapper.dive().prop('successCar')).toEqual(initialState.carState.success);
        expect(wrapper.dive().prop('messageCar')).toEqual(initialState.carState.message);
        expect(wrapper.dive().prop('car')).toEqual(initialState.carState.car);
    });
});