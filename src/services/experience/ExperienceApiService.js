/**
 * api service for each page
 * sends dummy data as a resolved promise
 * */

import {experienceDetailData} from "../../components/experienceDetail/Data";

export const getExperienceDetailData = () =>{
    return Promise.resolve(experienceDetailData);
}