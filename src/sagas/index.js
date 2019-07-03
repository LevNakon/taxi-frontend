import { all } from 'redux-saga/effects';

import { signUpWatcher } from './signUpSaga';
import { signInWatcher } from './signInSaga';

export default function* rootSaga() {
    yield all([
        signUpWatcher(),
        signInWatcher()
    ]);
};