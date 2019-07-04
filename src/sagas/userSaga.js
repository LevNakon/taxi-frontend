import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import auth from '../services/auth';
import PATHS from '../constants/routes';
import { userGetSuccess, userGetFail, USER_GET_WATCHER } from '../actions/userAction';

function* userGet() {
    try {
        let { data } = yield call(LayoutAPI.userGet);
        yield put(userGetSuccess(data));
    } catch (error) {
        const { data } = error.response;
        yield put(userGetFail(data));
    }
};

export function* userGetWatcher() {
    yield takeLatest(USER_GET_WATCHER, userGet);
};