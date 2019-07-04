import { all } from 'redux-saga/effects';

import { signUpWatcher } from './signUpSaga';
import { signInWatcher } from './signInSaga';
import { userGetWatcher } from './userSaga';
import { userUpdateWatcher } from './userUpdateSaga';

export default function* rootSaga() {
    yield all([
        signUpWatcher(),
        signInWatcher(),
        userGetWatcher(),
        userUpdateWatcher()
    ]);
};