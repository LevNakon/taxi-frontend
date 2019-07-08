import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import auth from '../services/auth';
import PATHS from '../constants/routes';
import { driverCreateSuccess, driverCreateFail } from '../actions/driverAction';
import { carCreateSuccess, carCreateFail } from '../actions/carAction';
import { DRIVER_CAR_GET_WATCHER } from '../actions/driverCarAction';

function* driverCarGet(action) {
    const {
        driverId
    } = action.payload;
    let carId;
    try {
        let driver = yield call(LayoutAPI.driverGet, { driverId });
        carId = driver.data.driver.carId;
        yield put(driverCreateSuccess(driver.data));
    } catch (error) {
        const { data } = error.response;
        yield put(driverCreateFail(data));
    }
    try {
        let car = yield call(LayoutAPI.carGet, { carId });
        yield put(carCreateSuccess(car.data));
    } catch (error) {
        const { data } = error.response;
        yield put(carCreateFail(data));
    }
};

export function* driverCarGetWatcher() {
    yield takeLatest(DRIVER_CAR_GET_WATCHER, driverCarGet);
};