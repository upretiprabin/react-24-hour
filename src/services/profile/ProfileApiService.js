/**
 * api service for profile page
 * sends dummy data as a resolved promise
 * */

import {Profile, Contacts} from "../../components/profile/Data";

export const getProfileComponent = () =>{
    return Promise.resolve(Profile);
}

export const getContactDetailById = (userId) =>{
    return Promise.resolve(Contacts.filter((contact) => contact.userId === userId));
}

export const saveContactDetail = (data) =>{
    return Promise.resolve(data);
}