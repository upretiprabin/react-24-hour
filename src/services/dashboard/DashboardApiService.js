/**
 * api service for each page
 * sends dummy data as a resolved promise
 * */

import {recentExperienceData} from "../../components/recentExperience/Data";
import {popularCategoriesData} from "../../components/popularCategories/Data";

export const getRecentExperienceData = () =>{
    return Promise.resolve(recentExperienceData);
}

export const getPopularCategoriesData = () =>{
    return Promise.resolve(popularCategoriesData);
}