import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import { carCreateSuccess, carCreateFail, CAR_CREATE_WATCHER, CAR_UPDATE_WATCHER } from '../actions/carAction';

/**
 * Create car generarator.
 * 
 * @param {Object} action 
 */
function* carCreate(action) {
    const {
        brand,
        model,
        year,
        run,
        history
    } = action.payload;
    try {
        let { data } = yield call(LayoutAPI.carCreate, {
            brand,
            model,
            year,
            run
        });
        yield put(carCreateSuccess(data));
    } catch (error) {
        const { data } = error.response;
        yield put(carCreateFail(data));
    }
};

/**
 * Update car generarator.
 * 
 * @param {Object} action 
 */
function* carUpdate(action) {
    const {
        brand,
        model,
        year,
        run,
        carId,
        history
    } = action.payload;
    try {
        let { data } = yield call(LayoutAPI.carUpdate, {
            brand,
            model,
            year,
            run,
            carId
        });
        yield put(carCreateSuccess(data));
        history.go(0);
    } catch (error) {
        const { data } = error.response;
        yield put(carCreateFail(data));
    }
};

/**
 * Create car watcher generarator.
 */
export function* carCreateWatcher() {
    yield takeLatest(CAR_CREATE_WATCHER, carCreate);
};

/**
 * Update car watcher generarator.
 */
export function* carUpdateWatcher() {
    yield takeLatest(CAR_UPDATE_WATCHER, carUpdate);
};