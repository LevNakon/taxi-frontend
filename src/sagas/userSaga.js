import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import {
    userGetSuccess,
    userUpdateSuccess,
    userFail,
    USER_GET_WATCHER,
    USER_UPDATE_WATCHER
} from '../actions/userAction';

/**
 * Update user generarator.
 * 
 * @param {Object} action 
 */
function* userUpdate(action) {
    const {
        firstName,
        lastName,
        email,
        birthdayDate,
        mobileNumber,
        homeAddress,
        workAddress,
        history
    } = action.payload;
    try {
        let { data } = yield call(LayoutAPI.updateUser, {
            firstName,
            lastName,
            email,
            birthdayDate,
            mobileNumber,
            homeAddress,
            workAddress
        });
        yield put(userUpdateSuccess(data));
        history.go(0);
    } catch (error) {
        const { data } = error.response;
        yield put(userFail(data));
    }
};

/**
 * Get user generarator.
 * 
 * @param {Object} action 
 */
function* userGet() {
    try {
        let { data } = yield call(LayoutAPI.userGet);
        yield put(userGetSuccess(data));
    } catch (error) {
        const { data } = error.response;
        yield put(userFail(data));
    }
};

/**
 * Get user watcher generator.
 */
export function* userGetWatcher() {
    yield takeLatest(USER_GET_WATCHER, userGet);
};

/**
 * Update user watcher generator.
 */
export function* userUpdateWatcher() {
    yield takeLatest(USER_UPDATE_WATCHER, userUpdate);
};