import React from "react";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {ROUTE_EXPERIENCE_DETAIL} from "../experienceDetail/constant";

const getDataFromSearch = (data,searchString) =>{
    if(searchString === null)
        return data
    return data?.filter((obj)=>{
        return obj.title?.toLowerCase()?.includes(searchString?.toLowerCase())
    })
}

const RecentExperience = ({recentData,searchString}) =>{
    recentData = getDataFromSearch(recentData,searchString)
    return (
        <div className='recent-experience'>
            <div className='section-title'>
                {
                    searchString &&
                    <h6 className={"text-muted"}>{recentData?.length} experience found</h6>
                }
                {
                    !searchString &&
                    <h6 className={""}>Recent Experiences</h6>
                }
            </div>
            {recentData && recentData.map((data, index) =>{
                let link = ROUTE_EXPERIENCE_DETAIL+"#"+data.id
                    return(
                        <div key={index}>
                            <div className="collectible">
                                <div className="collectible__image">
                                    <img src={data.image} alt={data.title} className="img-fluid" />
                                </div>
                                <div className="collectible__details">
                                    <p className="title">{data.title}</p>
                                    <p>{data.label}</p>
                                    <p className="by"><span>{data.usersCount}</span></p>
                                </div>
                                <Link to={link}>
                                    <FontAwesomeIcon className='collectible__icon' icon={faAngleRight} />
                                </Link>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default RecentExperience;
