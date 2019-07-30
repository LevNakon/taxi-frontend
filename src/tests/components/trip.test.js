import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Trip from '../../components/trip';

describe('Trip --- test render correctly component', () => {
    const initialState = {
        tripState: {
            message: '',
            success: true
        }
    };
    const mockStore = configureStore();
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<Trip store={store} />);
    });

    it('render correctly component Trip', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('message')).toEqual(initialState.tripState.message);
        expect(wrapper.dive().prop('success')).toEqual(initialState.tripState.success);
    });
});