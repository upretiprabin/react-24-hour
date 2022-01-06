import React from 'react';
import { Link } from 'react-router-dom';
import ActionPageTitle from './ActionPageTitle';
import { ActionPageReceiveLinks, ActionPageSendLinks, ACTION_TYPE_SEND } from './constant';

export const ActionPageModal = ({type, style, onClose, profile}) => {
    const links = ACTION_TYPE_SEND === type ? ActionPageSendLinks : ActionPageReceiveLinks;
    return (
        <div className='modal' style={style}>
            <div className='header'>
                <button type='button' onClick={() => onClose()}>X</button>
            </div>
            <div className="body">
                {links.map((linkDetail, index) => (
                    <Link key={'actionLink' + index} to={linkDetail.to + '?type=' + linkDetail.type + '&subType=' + linkDetail.subType + '&user=' + profile.username + '&firstName=' + profile.firstName +'&lastName=' + profile.lastName} >
                        <ActionPageTitle title={linkDetail.title} icon={linkDetail.icon} /> 
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ActionPageModal;
