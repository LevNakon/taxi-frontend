import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Car from '../../components/car';

describe('Car --- test render correctly component', () => {
    const initialState = {
        carState: {
            message: '',
            success: true,
            car: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000,
            }
        }
    };
    const mockStore = configureStore();
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<Car store={store} />);
    });

    it('render correctly component Car', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('success')).toEqual(initialState.carState.success);
        expect(wrapper.dive().prop('message')).toEqual(initialState.carState.message);
        expect(wrapper.dive().prop('car')).toEqual(initialState.carState.car);
    });
});