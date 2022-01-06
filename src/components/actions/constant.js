import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ACTION_TYPE_SEND = 'send';
export const ACTION_TYPE_RECEIVE = 'receive';
export const ACTION_SUB_TYPE_SEND_NEAR = 'SendNear';
export const ACTION_SUB_TYPE_SEND_NFT = 'SendNft';
export const ACTION_SUB_TYPE_RECEIVE_NEAR = 'ReceiveNear';
export const ACTION_SUB_TYPE_RECEIVE_NFT = 'ReceiveNft';
export const SEND_NEAR = 'Send Near';
export const SEND_NFT = 'Send NFT';
export const RECEIVE_NEAR = 'Receive Near';
export const RECEIVE_NFT = 'Receive NFT';

export const ActionPageSendLinks = [
    {
        type: ACTION_TYPE_SEND,
        subType: ACTION_SUB_TYPE_SEND_NEAR,
        title: SEND_NEAR,
        to: '/action',
        icon: (<div className='tag action__link-icon'><FontAwesomeIcon className='icon' icon={faArrowUp} /></div>)
    },
    {
        type: ACTION_TYPE_SEND,
        subType: ACTION_SUB_TYPE_SEND_NFT,
        title: SEND_NFT,
        to: '/action',
        icon: (<div className='tag action__link-icon'><FontAwesomeIcon className='icon' icon={faArrowUp} /></div>)
    }
];

export const ActionPageReceiveLinks = [
    {
        type: ACTION_TYPE_RECEIVE,
        subType: ACTION_SUB_TYPE_RECEIVE_NEAR,
        title: RECEIVE_NEAR,
        to: '/action',
        icon: (<div className='tag action__link-icon'><FontAwesomeIcon className='icon' icon={faArrowDown} /></div>)
    },
    {
        type: ACTION_TYPE_RECEIVE,
        subType: ACTION_SUB_TYPE_RECEIVE_NFT,
        title: RECEIVE_NFT,
        to: '/action',
        icon: (<div className='tag action__link-icon'><FontAwesomeIcon className='icon' icon={faArrowDown} /></div>)
    }
];