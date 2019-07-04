import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import signInReducer from './signInReducer';
import userReducer from './userReducer';
import userUpdateReducer from './userUpdateReducer';


export default combineReducers({
    signUpState: signUpReducer,
    signInState: signInReducer,
    userState: userReducer,
    userUpdateState: userUpdateReducer
});