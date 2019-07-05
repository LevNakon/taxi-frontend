import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import signInReducer from './signInReducer';
import userReducer from './userReducer';
import userUpdateReducer from './userUpdateReducer';
import carReducer from './carReducer';
import driverReducer from './driverReducer';


export default combineReducers({
    signUpState: signUpReducer,
    signInState: signInReducer,
    userState: userReducer,
    userUpdateState: userUpdateReducer,
    carState: carReducer,
    driverState: driverReducer
});