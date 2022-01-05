import {getRecentExperienceData,getPopularCategoriesData} from "./DashboardApiService";

export const loadRecentExperienceData = (context) =>{
    getRecentExperienceData()
        .then((data)=>{
            context.changeState({
                recentExperienceData : data
            })
        })
        .catch((e)=>{
            console.log(e)
        })
}

export const loadPopularCategoryData = (context) =>{
    getPopularCategoriesData()
        .then((data)=>{
            context.changeState({
                popularCategoriesData : data
            })
        })
        .catch((e)=>{
            console.log(e)
        })
}