import { all } from 'redux-saga/effects';

import { signUpWatcher } from './signUpSaga';
import { signInWatcher } from './signInSaga';
import { userGetWatcher } from './userSaga';
import { userUpdateWatcher } from './userUpdateSaga';
import { driverCarWatcher } from './driverCarSaga';
import { driverCreateWatcher, driverUpdateWatcher } from './driverSaga';
import { carCreateWatcher, carUpdateWatcher } from './carSaga';
import { driverCarGetWatcher } from './driverCraGetSaga';
import { tripCreateWatcher, tripGetAllWatcher } from './tripSaga';

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