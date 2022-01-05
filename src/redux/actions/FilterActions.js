import {
    SET_FILTER
} from './types';


export const setFilter = (filterData) => ({
    type: SET_FILTER,
    payload : {filterList:filterData}
});