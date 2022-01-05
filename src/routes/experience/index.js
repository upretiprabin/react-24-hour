import React, { Component } from 'react';
import ExperienceDetail from "../../components/experienceDetail/ExperienceDetail";
import {loadExperienceDetailData} from "../../services/experience/ExperienceService";

class ExperienceComponent extends Component {

    _isMounted = false;

    state = {
        experienceDetailData : null
    };

    static getDerivedStateFromProps(props,state){
        return {...state}
    }

    changeState(data){
        if(this._isMounted)
            this.setState(data)
    }

    loadData(){
        loadExperienceDetailData(this);
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
        const {experienceDetailData} = this.state;
        return (
            <>
                { experienceDetailData ? <ExperienceDetail experienceData={experienceDetailData} /> : null }
            </>
        );
    }
}

export default ExperienceComponent;
