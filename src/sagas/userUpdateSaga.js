import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import PATHS from '../constants/routes';
import { userUpdateSuccess, userUpdateFail, USER_UPDATE_WATCHER } from '../actions/userUpdateAction';

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
        yield put(userUpdateFail(data));
    }
};

export function* userUpdateWatcher() {
    yield takeLatest(USER_UPDATE_WATCHER, userUpdate);
};