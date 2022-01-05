/**
 * App Settings Reducers
 */

import {
    SET_FLAG
} from '../actions/types';

/**
 * initial app settings
 */
const INIT_STATE = {
    firstName : 'Prabin',
    lastName : 'Upreti'
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
        case SET_FLAG:
            return { ...state, setFlag : action.value };
        default: return { ...state };
	}
}
