/**
 * Redux Store
 */
import { createStore } from 'redux';
import reducers from '../reducers';

export function configureStore(initialState) {

    return createStore(
        reducers,
        initialState
    );
}

export default configureStore();