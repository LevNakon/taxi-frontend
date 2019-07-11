import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import signInReducer from './signInReducer';
import userReducer from './userReducer';
import carReducer from './carReducer';
import driverReducer from './driverReducer';
import tripReducer from './tripReducer';

export default combineReducers({
    signUpState: signUpReducer,
    signInState: signInReducer,
    userState: userReducer,
    carState: carReducer,
    driverState: driverReducer,
    tripState: tripReducer
});