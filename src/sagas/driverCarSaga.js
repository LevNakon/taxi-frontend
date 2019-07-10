import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import auth from '../services/auth';
import PATHS from '../constants/routes';
import { driverCreateSuccess, driverCreateFail } from '../actions/driverAction';
import { carCreateSuccess, carCreateFail } from '../actions/carAction';
import { DRIVER_CAR_WATCHER } from '../actions/driverCarAction';

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

export function* driverCarWatcher() {
    yield takeLatest(DRIVER_CAR_WATCHER, driverCar);
};