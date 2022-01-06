import React from "react";
import {Link} from "react-router-dom";

const Activities = ({activitiesData}) =>{
    console.log("activitesData",activitiesData)
    return (
        <div className='experience-activities'>
            <div>
                <p className={""}>{activitiesData?.length} activity found</p>
            </div>
                {activitiesData && activitiesData.map((data, index) =>{
                    return(
                        <div key={index}>
                            <div className="collectible">
                                <div className="activities__image">
                                    <img src={data.image} alt={data.userName} className="img-fluid"/>
                                </div>
                                <div className="collectible__details pt-0">
                                    <p className="title">{data.description}</p>
                                    <p className="by">Connected {data.date}</p>
                                </div>
                            </div>
                        </div>
                    );
                    }
                )}
        </div>
    );
}

export default Activities;
