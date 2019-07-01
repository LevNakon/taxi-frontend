import { all } from 'redux-saga/effects';

import { signUpWatcher } from './signUpSaga';

export default function* rootSaga() {
    yield all([
        signUpWatcher()
    ]);
};