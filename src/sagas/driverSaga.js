import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import PATHS from '../constants/routes';
import {
    driverCreateSuccess,
    driverCreateFail,
    DRIVER_CREATE_WATCHER,
    DRIVER_UPDATE_WATCHER,
    DRIVER_CAR_WATCHER,
    DRIVER_CAR_GET_WATCHER
} from '../actions/driverAction';
import {
    carCreateSuccess,
    carCreateFail
} from '../actions/carAction';

/**
 * Get car generarator.
 * 
 * @param {Object} action 
 */
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

/**
 * Create driver and car generarator.
 * 
 * @param {Object} action 
 */
function* driverCar(action) {
    const {
        experience,
        condition,
        brand,
        model,
        year,
        run,
        history
    } = action.payload;
    try {
        let driver = yield call(LayoutAPI.driverCreate, {
            experience,
            condition
        });
        yield put(driverCreateSuccess(driver.data));
    } catch (error) {
        const { data } = error.response;
        yield put(driverCreateFail(data));
    }
    try {
        let car = yield call(LayoutAPI.carCreate, {
            brand,
            model,
            year,
            run
        });
        yield put(carCreateSuccess(car.data));
        history.push(PATHS.TELEPORT);
        history.go(0);
    } catch (error) {
        const { data } = error.response;
        yield put(carCreateFail(data));
    }
};

/**
 * Create driver generarator.
 * 
 * @param {Object} action 
 */
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
        yield put(driverCreateSuccess(data));
    } catch (error) {
        const { data } = error.response;
        yield put(driverCreateFail(data));
    }
}

/**
 * Update driver generarator.
 * 
 * @param {Object} action 
 */
function* driverUpdate(action) {
    const {
        experience,
        condition,
        driverId,
        history
    } = action.payload;
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

/**
 * Update driver watcher generarator.
 */
export function* driverUpdateWatcher() {
    yield takeLatest(DRIVER_UPDATE_WATCHER, driverUpdate);
};

/**
 * Create driver watcher generarator.
 */
export function* driverCreateWatcher() {
    yield takeLatest(DRIVER_CREATE_WATCHER, driverCreate);
};

/**
 * Create driver and car watcher generarator.
 */
export function* driverCarWatcher() {
    yield takeLatest(DRIVER_CAR_WATCHER, driverCar);
};

/**
 * Get driver and car watcher generarator.
 */
export function* driverCarGetWatcher() {
    yield takeLatest(DRIVER_CAR_GET_WATCHER, driverCarGet);
};