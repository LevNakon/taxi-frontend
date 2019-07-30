import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Driver from '../../components/driver';

describe('Driver --- test render correctly component', () => {
    const initialState = {
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
        wrapper = shallow(<Driver store={store} />);
    });

    it('render correctly component Driver', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('success')).toEqual(initialState.driverState.success);
        expect(wrapper.dive().prop('message')).toEqual(initialState.driverState.message);
        expect(wrapper.dive().prop('driver')).toEqual(initialState.driverState.driver);
    });
});