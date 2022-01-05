/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import authUser from './authUser';
import filter from './filter';

const reducers = combineReducers({
    authUser,
    filter
});

export default reducers;
