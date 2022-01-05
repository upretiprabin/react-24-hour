import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ProfileIcon from '../profile/profileIcon/ProfileIcon';
import { ROUTE_ALL, ROUTE_RECEIVED, ROUTE_SENT, TXN_TYPE_RECEIVED, TXN_TYPE_SENT } from './constant';
import TransactionItems from './transactionItems/TransactionItems';

const Transactions = ({data}) => {
    const {hash} = useLocation();
    const authUser = useSelector((state) => state.authUser);
    const transactions = data && data.length > 0 ? data : [];
    const getTransactions = (type) => {
        let tempTransaction = [];
        switch(type) {
            case ROUTE_RECEIVED: 
                tempTransaction = transactions.filter((transaction) => TXN_TYPE_RECEIVED === transaction.type)
                break;
            case ROUTE_SENT: 
                tempTransaction = transactions.filter((transaction) => TXN_TYPE_SENT === transaction.type)
                break;
            default:
                tempTransaction = transactions;
        }
        return tempTransaction;
    }

    return (
        <>
            <div>
                <h3>Transactions</h3>
                <ProfileIcon name={authUser.firstName + ' ' + authUser.lastName} size={'md'}/>
            </div>
            <div>
                <Link to={ROUTE_ALL}> All </Link>|
                <Link to={ROUTE_SENT}> Sent </Link>|
                <Link to={ROUTE_RECEIVED}> Received </Link>
            </div>
            <div>
                <TransactionItems data={getTransactions(hash)} />
            </div>
        </>
    );
}

export default Transactions;