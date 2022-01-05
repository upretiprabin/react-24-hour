import React from "react";
import {IndividualCollectibles} from "../individualCollectibles/IndividualCollectibles";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Actions = () => {
    return (
        <div className="action">
            <button className='btn btn--primary mb-3 btn-block'>
                Send
                <FontAwesomeIcon className='action__icon' icon={faArrowUp} />
            </button>
            <button className='btn btn--primary btn-block'>
                Receive
                <FontAwesomeIcon className='action__icon' icon={faArrowDown} />
            </button>
        </div>
    );
};