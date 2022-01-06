import React, { useState } from 'react';
import { Form, Field } from 'react-final-form'
import ProfileIcon from '../profile/profileIcon/ProfileIcon';
import ActionPageTitle from './ActionPageTitle';
import { ActionPageReceiveLinks, ActionPageSendLinks, ACTION_SUB_TYPE_SEND_NEAR, ACTION_SUB_TYPE_SEND_NFT, ACTION_TYPE_RECEIVE, ACTION_TYPE_SEND, RECEIVE_NEAR, SEND_NEAR, SEND_NFT } from './constant';

const ActionForm = ({type, subType, onSubmit, user, fullName}) => {
    const actionType = type ? type : ACTION_TYPE_SEND;
    const [actionSubType, setSubType] = useState(subType ? subType : ACTION_SUB_TYPE_SEND_NEAR);
    const links = ACTION_TYPE_RECEIVE === actionType ? ActionPageReceiveLinks : ActionPageSendLinks;
    const link = links.filter((tempLink) => actionSubType === tempLink.subType)[0];

    const onSubTypeChange = (value) => {
        setSubType(value);
    }
    return(
        <>
            <div>
                <ActionPageTitle title={link.title} icon={link.icon} />
            </div>
            <div>
                {ACTION_TYPE_SEND === actionType ? 
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="to">To</label>
                                <div>
                                    <ProfileIcon name={fullName || null} size={'sm'}/>
                                    <input type="text" name="to" placeholder="" defaultValue={user || null} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="send">Send</label>
                                <div>
                                    Near Token <input type="radio" name="send" id="NEAR" placeholder="" onClick={() => onSubTypeChange(ACTION_SUB_TYPE_SEND_NEAR)} />
                                    NFT <input type="radio" name="send" id="NEF" placeholder=""  onClick={() => onSubTypeChange(ACTION_SUB_TYPE_SEND_NFT)}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="amount">Amount</label>
                                <div>
                                    <Field name="amount" component="input" placeholder="" />
                                    <span>{actionSubType === ACTION_SUB_TYPE_SEND_NEAR ? 'NEAR' : 'NFT'}</span>
                                </div>
                            </div>
                            <button type="submit"> Send <span>{link.icon}</span></button>
                        </form>
                    )} />
                    : <p>{'No Form for Receive'}</p>
                }
                
            </div>
        </>
    );
};

export default ActionForm;
