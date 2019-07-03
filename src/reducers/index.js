import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import signInReducer from './signInReducer';


export default combineReducers({
    signUpState: signUpReducer,
    signInState: signInReducer
});