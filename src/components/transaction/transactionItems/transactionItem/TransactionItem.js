import React from 'react';
import { TXN_TYPE_RECEIVED } from '../../constant';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const TransactionItem = ({data}) => {
    const transaction = data || {};
    
    // Date Different calculation in days.
    const currentDate = new Date();
    const createdDate = new Date(transaction.createdDate);
    const differenceDate = Math.abs(createdDate.getTime() - currentDate.getTime());
    let days = Math.ceil(differenceDate / (1000 * 3600 * 24));
    days = 2 ;
    return (
        <div className={TXN_TYPE_RECEIVED === transaction.type ? "transaction-item" : "transaction-item send"}>
            <div className='tag'>
                <FontAwesomeIcon className='icon' icon={faArrowDown} />
            </div>
            <div className='transaction-item__details'>
                <p className="head">{transaction.near}</p>
                <p className="tail">
                    <span>{TXN_TYPE_RECEIVED === transaction.type ? "Received from " : "Sent to "}</span>
                    <span className='username'>{transaction.username}</span>
                </p>
            </div>
            <p className='transaction-item__date'>{days + ' days ago'}</p>
        </div>
    )
};

export default TransactionItem;
