/**
 * Transaction page starts from here
 */
 import React, { Component } from 'react';
import Transactions from '../components/transaction/Transactions';
import { loadTransactions } from '../services/transaction/TransactionService';
 
 class TransactionsComponent extends Component {
 
     _isMounted = false;
 
     state = {
         transactions : null
     };
 
     static getDerivedStateFromProps(props,state){
         return {...state}
     }
 
     changeState(data){
         if(this._isMounted)
             this.setState(data)
     }
 
     loadData(){
        loadTransactions(this);
     }
 
     componentDidMount(){
         this._isMounted = true;
         this.loadData()
     }
 
     componentDidUpdate(prevProps,prevState){
     }
 
     componentWillUnmount(){
         this._isMounted = false;
     }
 
     render() {
         const {transactions} = this.state;
         return (
             <>
                 { transactions ? <Transactions data={transactions} /> : null }
             </>
         );
     }
 }
 
 export default TransactionsComponent;
 