import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

export const IndividualCollectibles = (props) => {
    const {image, title, by} = props;
    return (
        <div className="collectible">
            <div className="collectible__image">
                <img src={image} alt="img"/>
            </div>
            <div className="collectible__details">
                <p className="title">{title}</p>
                <p className="by">by <span>{by}</span></p>
            </div>
            <FontAwesomeIcon className='collectible__icon' icon={faAngleRight} />
        </div>
    );
};