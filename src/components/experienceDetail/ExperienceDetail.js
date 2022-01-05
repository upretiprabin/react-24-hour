import React from "react";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLocation} from "react-router-dom";

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
                    <p className={""}>{experienceDetailData.title}</p>
                </div>
            }
        </div>
    );
}

export default ExperienceDetail;
