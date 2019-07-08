import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import auth from '../services/auth';
import PATHS from '../constants/routes';
import { driverCreateSuccess, driverCreateFail, DRIVER_CREATE_WATCHER, DRIVER_UPDATE_WATCHER } from '../actions/driverAction';

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

function* driverUpdate(action) {
    const {
        experience,
        condition,
        driverId,
        history
    } = action.payload;
    console.log(action.payload);
    try {
        let { data } = yield call(LayoutAPI.driverUpdate, {
            experience,
            condition,
            driverId
        });
        yield put(driverCreateSuccess(data));
        history.go(0);
    } catch (error) {
        const { data } = error.response;
        yield put(driverCreateFail(data));
    }
}

export function* driverUpdateWatcher() {
    yield takeLatest(DRIVER_UPDATE_WATCHER, driverUpdate);
};

export function* driverCreateWatcher() {
    yield takeLatest(DRIVER_CREATE_WATCHER, driverCreate);
};