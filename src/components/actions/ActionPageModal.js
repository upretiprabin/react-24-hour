import React from 'react';
import { Link } from 'react-router-dom';
import ModalLayout from '../modal/ModalLayout';
import ActionPageTitle from './ActionPageTitle';
import { ActionPageReceiveLinks, ActionPageSendLinks, ACTION_TYPE_SEND } from './constant';

export const ActionPageModal = ({type, button, profile}) => {
    const links = ACTION_TYPE_SEND === type ? ActionPageSendLinks : ActionPageReceiveLinks;
    return (
        <ModalLayout modalIcon={button}>
            <div>
                {links.map((linkDetail, index) => (
                    <Link key={'actionLink' + index} to={linkDetail.to + '?type=' + linkDetail.type + '&subType=' + linkDetail.subType + '&user=' + profile.username + '&firstName=' + profile.firstName +'&lastName=' + profile.lastName} >
                        <ActionPageTitle title={linkDetail.title} icon={linkDetail.icon} /> 
                    </Link>
                ))}
            </div>
        </ModalLayout>
    );
}

export default ActionPageModal;
