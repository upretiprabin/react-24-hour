import React, { Component } from 'react';
import Profile from "../../components/profile/Profile";
import {loadProfileData} from "../../services/profile/ProfileService";

class ProfileComponent extends Component {

    _isMounted = false;

    state = {
        profileData : null
    };

    static getDerivedStateFromProps(props,state){
        return {...state}
    }

    changeState(data){
        if(this._isMounted)
            this.setState(data)
    }

    loadData(){
        loadProfileData(this);
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
        const {profileData} = this.state;
        return (
            <>
                { profileData ? <Profile data={profileData} /> : null }
            </>
        );
    }
}

export default ProfileComponent;
