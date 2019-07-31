import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import PATHS from '../constants/routes';
import { signUpSuccess, signUpFail, SIGN_UP_WATCHER } from '../actions/signUpAction';

/**
 * Sign Up generarator.
 * 
 * @param {Object} action 
 */
function* signUp(action) {
    const {
        firstName,
        lastName,
        email,
        gender,
        password,
        history
    } = action.payload;
    try {
        let { data } = yield call(LayoutAPI.signUp, {
            firstName,
            lastName,
            email,
            gender,
            password
        });
        yield put(signUpSuccess(data));
        history.push(PATHS.INDEX);
    } catch (error) {
        const { data } = error.response;
        yield put(signUpFail(data));
    }
};

/**
 * Sign Up watcher generator.
 */
export function* signUpWatcher() {
    yield takeLatest(SIGN_UP_WATCHER, signUp);
};