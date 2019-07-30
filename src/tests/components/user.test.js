import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import User from '../../components/user';

describe('User --- test render correctly component', () => {
    const initialState = {
        userState: {
            user: {
                firstName: 'test firstName',
                lastName: 'test lastName',
                email: 'test email',
                password: 'test password',
                gender: 'MALE',
                birthdayDate: 'test birthdayDate',
                avatarUrl: 'test avatarUrl',
                mobileNumber: 'test mobileNumber',
                homeAddress: 'test homeAddress',
                workAddress: 'test workAddress',
                driverId: null
            },
            message: '',
            success: true
        }
    };
    const mockStore = configureStore();
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<User store={store} />);
    });

    it('render correctly component User', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('user')).toEqual(initialState.userState.user);
        expect(wrapper.dive().prop('message')).toEqual(initialState.userState.message);
        expect(wrapper.dive().prop('success')).toEqual(initialState.userState.success);
    });
});