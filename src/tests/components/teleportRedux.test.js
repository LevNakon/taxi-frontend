import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Teleport from '../../components/teleport';

describe('Teleport Redux --- test render correctly component', () => {
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
            isChecked: false
        }
    };
    const mockStore = configureStore();
    let store, wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<Teleport store={store} />);
    });

    it('render correctly component Teleport', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('user')).toEqual(initialState.userState.user);
        expect(wrapper.dive().prop('isChecked')).toEqual(initialState.userState.isChecked);
    });
});