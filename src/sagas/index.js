import { all } from 'redux-saga/effects';

import { signUpWatcher } from './signUpSaga';
import { signInWatcher } from './signInSaga';
import { userGetWatcher } from './userSaga';
import { userUpdateWatcher } from './userUpdateSaga';
import { driverCarWatcher } from './driverCarSaga';
import { driverCreateWatcher, driverUpdateWatcher } from './driverSaga';
import { carCreateWatcher, carUpdateWatcher } from './carSaga';
import { driverCarGetWatcher } from './driverCraGetSaga';

export default function* rootSaga() {
    yield all([
        signUpWatcher(),
        signInWatcher(),
        userGetWatcher(),
        userUpdateWatcher(),
        driverCarWatcher(),
        carCreateWatcher(),
        driverCreateWatcher(),
        driverCarGetWatcher(),
        driverUpdateWatcher(),
        carUpdateWatcher()
    ]);
};