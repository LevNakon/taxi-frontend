import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Trips from '../../components/trips';

describe('Trips --- test render correctly component', () => {
    const initialState = {
        tripState: {
            message: '',
            success: true,
            trips: []
        }
    };
    const mockStore = configureStore();
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<Trips store={store} />);
    });

    it('render correctly component Trips', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('message')).toEqual(initialState.tripState.message);
        expect(wrapper.dive().prop('success')).toEqual(initialState.tripState.success);
        expect(wrapper.dive().prop('trips')).toEqual(initialState.tripState.trips);
    });
});