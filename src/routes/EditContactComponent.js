/**
 * Transaction page starts from here
 */
 import React, { Component } from 'react';
import EditContact from '../components/editContact/EditContact';
import { loadContactDetail, updateContactDetail } from '../services/profile/ProfileService';
 
 class EditContactComponent extends Component {
 
     _isMounted = false;

     state = {
         contactDetail: {},
         editResponse : null
     };
 
     static getDerivedStateFromProps(props,state){
         return {...state}
     }
 
     changeState(data){
         if(this._isMounted)
             this.setState(data)
     }
 
     loadData(){
        const { userId } = this.props.match.params;
        loadContactDetail(this, userId);
     }
 
     componentDidMount(){
         this._isMounted = true;
         this.loadData();
     }
 
     componentDidUpdate(prevProps,prevState){
     }
 
     componentWillUnmount(){
         this._isMounted = false;
     }
 
     render() {
        const onSubmit = (value) => {
            const { userId } = this.props.match.params;
            updateContactDetail(this, userId, value);
        };
        const {contactDetail} = this.state;

        return (
            <>
                <EditContact onSubmit={onSubmit} contactDetail={contactDetail || {}}/>
            </>
        );
     }
 }
 
 export default EditContactComponent;
 