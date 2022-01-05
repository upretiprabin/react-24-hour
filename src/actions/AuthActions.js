/**
 * Redux App Settings Actions
 */
import {
    SET_FLAG
} from './types';


export const setTestFlag = (value) => ({
    type: SET_FLAG,
    value
});