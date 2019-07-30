
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Header from '../../components/header';

describe('Header Redux --- test render correctly component', () => {
    const initialState = {
        carState: {
            car: {
                brand: 'test brand',
                model: 'test model',
                year: 2000,
                run: 20000,
            }
        },
        driverState: {
            driver: {
                experience: 0,
                condition: 'COMFORT',
            }
        },
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
        wrapper = shallow(<Header store={store} />);
    });

    it('render correctly component Header', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('check props matches with initialState', () => {
        expect(wrapper.dive().prop('driver')).toEqual(initialState.driverState.driver);
        expect(wrapper.dive().prop('car')).toEqual(initialState.carState.car);
        expect(wrapper.dive().prop('user')).toEqual(initialState.userState.user);
        expect(wrapper.dive().prop('isChecked')).toEqual(initialState.userState.isChecked);
    });
});