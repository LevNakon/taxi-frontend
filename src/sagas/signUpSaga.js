import { call, put, takeLatest } from 'redux-saga/effects';

import LayoutAPI from '../apis/layouts';
import { signUpSuccess, signUpFail, SIGN_UP_WATCHER } from '../actions/signUpActions';

function* signUp(action){
    try{
        let { data } = yield call(LayoutAPI.signUp, action.payload);
        yield put(signUpSuccess(data));
    } catch(error){
        yield put(signUpFail(error));
    }
};



export function* signUpWatcher(){
    yield takeLatest(SIGN_UP_WATCHER, signUp);
};