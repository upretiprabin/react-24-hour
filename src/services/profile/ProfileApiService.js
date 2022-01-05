/**
 * api service for profile page
 * sends dummy data as a resolved promise
 * */

import {profile} from "../../components/profile/Data";

export const getProfileComponent = () =>{
    return Promise.resolve(profile);
}