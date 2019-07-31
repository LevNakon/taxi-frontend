import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import { tripCreateSuccess, tripGetAllSuccess, tripFail, TRIP_CREATE_WATCHER, TRIP_GET_ALL_WATCHER } from '../actions/tripAction';

/**
 * Create trip generarator.
 * 
 * @param {Object} action 
 */
function* tripCreate(action) {
    const {
        startAddress,
        endAddress,
        price,
        id,
        history
    } = action.payload;
    try {
        let { data } = yield call(LayoutAPI.tripCreate, {
            startAddress,
            endAddress,
            price,
            id
        });
        yield put(tripCreateSuccess(data));
    } catch (error) {
        const { data } = error.response;
        yield put(tripFail(data));
    }
}

/**
 * Get all trips generarator.
 * 
 * @param {Object} action 
 */
function* tripGetAll(action) {
    const {
        history
    } = action.payload;
    try {
        let { data } = yield call(LayoutAPI.tripGetAll);
        yield put(tripGetAllSuccess(data));
    } catch (error) {
        const { data } = error.response;
        yield put(tripFail(data));
    }
}

/**
 * Get all trips watcher generarator.
 */
export function* tripGetAllWatcher() {
    yield takeLatest(TRIP_GET_ALL_WATCHER, tripGetAll);
};

/**
 * Create trip watcher generarator.
 */
export function* tripCreateWatcher() {
    yield takeLatest(TRIP_CREATE_WATCHER, tripCreate);
};