/**
 * api service for each page
 * sends dummy data as a resolved promise
 * */

import {profile} from "../../components/profile/Data";

export const getProfileComponent = () =>{
    return Promise.resolve(profile);
}