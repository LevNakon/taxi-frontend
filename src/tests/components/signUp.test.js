import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import SignUp from '../../components/signUp';

describe('SignUp --- test render correctly component', () => {
    const initialState = {
        signUpState: {
            message: '',
            success: true,
            userId: 1
        }
    };
    const mockStore = configureStore();
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<SignUp store={store} />);
    });

    it('render correctly component SignUp', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('success')).toEqual(initialState.signUpState.success);
        expect(wrapper.dive().prop('message')).toEqual(initialState.signUpState.message);
        expect(wrapper.dive().prop('userId')).toEqual(initialState.signUpState.userId);
     });
});