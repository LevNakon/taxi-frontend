import { all } from 'redux-saga/effects';

import { signUpWatcher } from './signUpSaga';
import { signInWatcher } from './signInSaga';
import {
    userGetWatcher,
    userUpdateWatcher
} from './userSaga';
import {
    driverCreateWatcher,
    driverUpdateWatcher,
    driverCarWatcher,
    driverCarGetWatcher
} from './driverSaga';
import {
    carCreateWatcher,
    carUpdateWatcher
} from './carSaga';
import {
    tripCreateWatcher,
    tripGetAllWatcher
} from './tripSaga';

export default function* rootSaga() {
    yield all([
        tripCreateWatcher(),
        signUpWatcher(),
        signInWatcher(),
        userGetWatcher(),
        userUpdateWatcher(),
        driverCarWatcher(),
        carCreateWatcher(),
        driverCreateWatcher(),
        driverCarGetWatcher(),
        driverUpdateWatcher(),
        carUpdateWatcher(),
        tripGetAllWatcher()
    ]);
};