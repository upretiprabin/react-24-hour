import React from "react";
import {useLocation} from "react-router-dom";
import DetailTabs from "./DetailTabs";

const ExperienceDetail = ({experienceData}) =>{
    console.log("experienceData",experienceData)
    let hash = useLocation().hash;
    if(hash)
        hash = hash.split("#")[1]
    let experienceDetailData = experienceData.filter((data)=>{
        return data?.id?.toString() === hash.toString()
    })
    if(experienceDetailData)
        experienceDetailData = experienceDetailData[0]

    return (
        <div className='experience-detail'>
            {experienceDetailData &&
                <div>
                    <DetailTabs detailData={experienceDetailData}/>
                </div>
            }
        </div>
    );
}

export default ExperienceDetail;
