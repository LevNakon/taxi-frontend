import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import SignIn from '../../components/signIn';

describe('SignIn --- test render correctly component', () => {
    const initialState = {
        signInState: {
            message: '',
            success: true
        }
    };
    const mockStore = configureStore();
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<SignIn store={store} />);
    });

    it('render correctly component SignIn', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('success')).toEqual(initialState.signInState.success);
        expect(wrapper.dive().prop('message')).toEqual(initialState.signInState.message);
     });
});