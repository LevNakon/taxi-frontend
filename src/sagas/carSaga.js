import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import auth from '../services/auth';
import PATHS from '../constants/routes';
import { carCreateSuccess, carCreateFail, CAR_CREATE_WATCHER } from '../actions/carAction';

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
        console.log(data);
        yield put(carCreateSuccess(data));
        // history.push(PATHS.TELEPORT);
    } catch (error) {
        const { data } = error.response;
        yield put(carCreateFail(data));
    }
};

export function* carCreateWatcher() {
    yield takeLatest(CAR_CREATE_WATCHER, carCreate);
};