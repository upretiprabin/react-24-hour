/**
 * api service for each page
 * sends dummy data as a resolved promise
 * */

import {dummyData1} from "../../components/FirstPage/Hello/data";

export const getDataForHelloComponent = () =>{
    return Promise.resolve(dummyData1);
}