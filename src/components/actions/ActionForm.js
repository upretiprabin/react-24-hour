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
            <div className='page-title'>
                <ActionPageTitle title={link.title} icon={link.icon} />
            </div>
            <div>
                {ACTION_TYPE_SEND === actionType ? 
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="to">To</label>
                                <div className='userInput'>
                                    <ProfileIcon name={fullName || null} size={'sm'}/>
                                    <input type="text" name="to" placeholder="" defaultValue={user || null} />
                                </div>
                            </div>
                            <div className='form-inline mb-2'>
                                <label htmlFor="send" className='mr-3'>Send:</label>
                                <div className='action-radio'>
                                    <input type="radio" name="send" id="NEAR" placeholder="" className='near-option' onClick={() => onSubTypeChange(ACTION_SUB_TYPE_SEND_NEAR)} />
                                    <label htmlFor="NEAR" >Near Token</label>
                                    <input type="radio" name="send" id="NEF" placeholder="" className='nft-option'  onClick={() => onSubTypeChange(ACTION_SUB_TYPE_SEND_NFT)}/>
                                    <label htmlFor="NEF" >NFT</label>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="amount">Amount</label>
                                <div className='action-amount'>
                                    <Field name="amount" component="input" placeholder="" />
                                    <span className='type'>{actionSubType === ACTION_SUB_TYPE_SEND_NEAR ? 'NEAR' : 'NFT'}</span>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className='btn btn-secondary'> Send <span className='d-inline-block ml-2'>{link.icon}</span></button>
                            </div>
                        </form>
                    )} />
                    : <p>{'No Form for Receive'}</p>
                }
                
            </div>
        </>
    );
};

export default ActionForm;
