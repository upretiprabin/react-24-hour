import React from "react";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {ROUTE_EXPERIENCE_DETAIL} from "../experienceDetail/constant";

const RecentExperience = ({recentData}) =>{
    return (
        <div className='recent-experience'>
            <div>
                <p className={""}>Recent Experiences</p>
            </div>
            <ul className="list-unstyled mb-0">
                {recentData && recentData.map((data, index) =>{
                    let link = ROUTE_EXPERIENCE_DETAIL+"#"+data.id
                        return(
                            <li className="d-flex align-items-center justify-content-between p-20 border-bottom" key={index}>
                                <div className="d-flex">
                                    <div className="mr-3">
                                        <img src={data.image} alt={data.title} height="80" width="80" className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <h5 className="mb-2">{data.title}</h5>
                                        <div className="d-flex text-muted">
                                            <span className="mx-1">{data.label}</span>
                                        </div>
                                        <div className="d-flex text-muted">
                                            <span className="mx-1">{data.usersCount}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Link to={link}>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
}

export default RecentExperience;
