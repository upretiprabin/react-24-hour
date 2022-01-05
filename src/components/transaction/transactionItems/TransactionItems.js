import React from 'react';
import TransactionItem from './transactionItem/TransactionItem';

const TransactionItems = ({data}) => {
    return (
        <>
            {data && data.length > 0 && data.map((item, index) =>
                <TransactionItem key={"item" + index} data={item}/>
            )}
            {!data || data.length <= 0 && <p>No transactions history.</p>}
        </>
    )
}

export default TransactionItems;
