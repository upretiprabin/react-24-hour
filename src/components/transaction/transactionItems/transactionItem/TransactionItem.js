import React from 'react';
import { TXN_TYPE_RECEIVED } from '../../constant';

const TransactionItem = ({data}) => {
    const transaction = data || {};
    
    // Date Different calculation in days.
    const currentDate = new Date();
    const createdDate = new Date(transaction.createdDate);
    const differenceDate = Math.abs(createdDate.getTime() - currentDate.getTime());
    const days = Math.ceil(differenceDate / (1000 * 3600 * 24));

    return (
        <>
            <div>{TXN_TYPE_RECEIVED === transaction.type ? "Received Image" : "Sent Image"}</div>
            <div>
                <p className="head">{transaction.near}</p>
                <p className="tail">
                    <span>{TXN_TYPE_RECEIVED === transaction.type ? "Received from " : "Sent to "}</span>
                    <span>{transaction.username}</span>
                </p>
            </div>
            <div>
                <p>{days + ' days ago'}</p>
            </div>
        </>
    )
}

export default TransactionItem;