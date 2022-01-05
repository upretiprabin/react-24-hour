import {getProfileComponent} from "./ProfileApiService";

export const loadProfileData = (context) =>{
    getProfileComponent()
        .then((data)=>{
            context.changeState({
                profileData : data
            })
        })
        .catch((e)=>{
            console.log(e)
        })
}