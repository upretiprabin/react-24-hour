import {getContactDetailById, getProfileComponent, saveContactDetail, } from "./ProfileApiService";

export const loadProfileData = (context) =>{
    getProfileComponent()
        .then((data)=>{
            context.changeState({
                profileData : data
            });
        })
        .catch((e)=>{
            console.log(e)
        });
}

export const loadContactDetail = (context, userId) => {
    getContactDetailById(userId).then((data) => {
        context.changeState({
            contactDetail: data || {},
            editResponse : null
        });
    }).catch((e)=>{
        context.changeState({
            contactDetail: {},
            editResponse : 'failed'
        });
        console.log(e);
    });
}

export const updateContactDetail = (context, userId, data) => {
    saveContactDetail({...data, userId: userId}).then(() => {
        context.changeState({
            contactDetail: data,
            editResponse : 'success'
        });
    }).catch((e)=>{
        console.log(e);
        context.changeState({
            contactDetail: {...data, userId: userId},
            editResponse : 'failed'
        });
    });
}