import React, { useState } from "react";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ActionPageModal from "./ActionPageModal";
import { ACTION_TYPE_RECEIVE, ACTION_TYPE_SEND } from "./constant";

export const Actions = ({profile}) => {
    const [actionType, setActionType] = useState(null);
    const onActionTypeChange = (type) => {
        setActionType(type);
    };

    const onClose = () => {
        setActionType(null);
    };

    return (
        <>
            <div className="action">
                
                <ActionPageModal type={actionType} profile={profile} button={
                    <button className='btn btn--primary mb-3 btn-block' onClick={() => onActionTypeChange(ACTION_TYPE_SEND)}>
                        Send
                        <FontAwesomeIcon className='action__icon' icon={faArrowUp} />
                    </button>
                }/>
                <ActionPageModal type={actionType} profile={profile} button={
                    <button className='btn btn--primary btn-block' onClick={() => onActionTypeChange(ACTION_TYPE_RECEIVE)}>
                        Receive
                        <FontAwesomeIcon className='action__icon' icon={faArrowDown} />
                    </button>
                }/>
                
            </div>
        </>
    );
};