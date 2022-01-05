/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import authUser from './authUser';

const reducers = combineReducers({
    authUser
});

export default reducers;
