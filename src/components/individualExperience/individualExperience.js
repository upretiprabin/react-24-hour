import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export const IndividualExperience = (props) => {
    const {image, title, status, connectionDate} = props;
    return (
        <div className="collectible">
            <div className="collectible__image">
                <img src={image} alt="img"/>
            </div>
            <div className="collectible__details pt-0">
                <p className="title">{title}</p>
                <p className="by">connected on {connectionDate}</p>
                <Link className='link' to={"#"}> Disconnect </Link>
            </div>
        </div>
    );
};