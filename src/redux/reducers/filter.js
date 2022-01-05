import {SET_FILTER} from "../actions/types";
import {filterData} from "../../components/filter/Data";

/**
 * reducer for filter settings
 *
 * */

const INIT_STATE = {
    filterList : filterData
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_FILTER:
            return { ...state, ...action.payload };
        default: return { ...state };
    }
}