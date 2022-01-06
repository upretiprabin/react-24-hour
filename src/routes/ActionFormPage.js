/**
 * Transaction page starts from here
 */
 import React, { Component } from 'react';
import ActionForm from '../components/actions/ActionForm';
import { ACTION_TYPE_SEND } from '../components/actions/constant';
import { sendAmount } from '../services/transaction/TransactionService';
 
 class ActionFormComponent extends Component {
 
     _isMounted = false;

     state = {
         actionDetail: {},
         actionResponse : null
     };
 
     static getDerivedStateFromProps(props,state){
         return {...state}
     }
 
     changeState(data){
         if(this._isMounted)
             this.setState(data)
     }
 
     componentDidMount(){
         this._isMounted = true;
     }
 
     componentDidUpdate(prevProps,prevState){
     }
 
     componentWillUnmount(){
         this._isMounted = false;
     }
 
     render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const type = params.get('type');
        const subType = params.get('subType');
        const user = params.get('user');
        const firstName = params.get('firstName');
        const lastName = params.get('lastName');

        const onSubmit = (value) => {
            sendAmount(this, type, value);
        };

        return (
            <>
                <ActionForm onSubmit={onSubmit} type={type} subType={subType} user={user} fullName={firstName + ' ' + lastName}/>
            </>
        );
     }
 }
 
 export default ActionFormComponent;
 