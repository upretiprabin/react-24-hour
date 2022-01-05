/**
 * reducer for app user
 *
 * */
import {
    SET_FLAG
} from '../actions/types';

const INIT_STATE = {
    firstName : 'John',
    lastName : 'Doe',
    username: 'JohnDoe.near',
    relatedAccounts: [
        {username: 'JohnDoe.near', near: '0.34'},
        {username: 'mike.near', near: '0.12'},
        {username: 'john.near', near: '2.34'}
    ]
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
        case SET_FLAG:
            return { ...state, setFlag : action.value };
        default: return { ...state };
	}
}
