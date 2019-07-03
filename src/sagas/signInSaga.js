import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import auth from '../services/auth';
import { signInSuccess, signInFail, SIGN_IN_WATCHER } from '../actions/signInAction';

function* signIn(action) {
    const {
        email,
        password,
        history
    } = action.payload;
    try {
        let { data } = yield call(LayoutAPI.signIn, {
            email,
            password
        });
        yield put(signInSuccess(data));
        auth.login(data.token);
        history.go(0);
    } catch (error) {
        const { data } = error.response;
        yield put(signInFail(data));
    }
};

export function* signInWatcher() {
    yield takeLatest(SIGN_IN_WATCHER, signIn);
};