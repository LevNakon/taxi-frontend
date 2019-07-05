import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import auth from '../services/auth';
import PATHS from '../constants/routes';
import { driverCreateSuccess, driverCreateFail, DRIVER_CREATE_WATCHER } from '../actions/driverAction';

function* driverCreate(action) {
    const {
        experience,
        condition,
        history
    } = action.payload;
    try {
        let { data } = yield call(LayoutAPI.driverCreate, {
            experience,
            condition
        });
        console.log(data);
        yield put(driverCreateSuccess(data));
    } catch (error) {
        const { data } = error.response;
        yield put(driverCreateFail(data));
    }
}

export function* driverCreateWatcher() {
    yield takeLatest(DRIVER_CREATE_WATCHER, driverCreate);
};