import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import auth from '../services/auth';
import PATHS from '../constants/routes';
import { tripCreateSuccess, tripGetAllSuccess, tripFail, TRIP_CREATE_WATCHER, TRIP_GET_ALL_WATCHER } from '../actions/tripAction';

function* tripCreate(action) {
    const {
        startAddress,
        endAddress,
        price,
        id,
        history
    } = action.payload;
    console.log(action.payload);
    try {
        let { data } = yield call(LayoutAPI.tripCreate, {
            startAddress,
            endAddress,
            price,
            id
        });
        console.log(data);
        yield put(tripCreateSuccess(data));
    } catch (error) {
        const { data } = error.response;
        yield put(tripFail(data));
    }
}

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

export function* tripGetAllWatcher() {
    yield takeLatest(TRIP_GET_ALL_WATCHER, tripGetAll);
};

export function* tripCreateWatcher() {
    yield takeLatest(TRIP_CREATE_WATCHER, tripCreate);
};