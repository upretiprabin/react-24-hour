import {getExperienceDetailData} from "./ExperienceApiService";

export const loadExperienceDetailData = (context) =>{
    getExperienceDetailData()
        .then((data)=>{
            context.changeState({
                experienceDetailData : data
            })
        })
        .catch((e)=>{
            console.log(e)
        })
}