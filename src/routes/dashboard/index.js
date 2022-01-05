import React, { Component } from 'react';
import RecentExperience from "../../components/recentExperience/RecentExperience";
import {loadRecentExperienceData,loadPopularCategoryData} from "../../services/dashboard/DashboardService";
import PopularCategories from "../../components/popularCategories/PopularCategories";

class DashboardComponent extends Component {

    _isMounted = false;

    state = {
        recentExperienceData : null,
        popularCategoriesData : null
    };

    static getDerivedStateFromProps(props,state){
        return {...state}
    }

    changeState(data){
        if(this._isMounted)
            this.setState(data)
    }

    loadData(){
        loadRecentExperienceData(this);
        loadPopularCategoryData(this);
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
        const {recentExperienceData,popularCategoriesData} = this.state;
        return (
            <>
                { recentExperienceData ? <RecentExperience recentData={recentExperienceData} /> : null }
                { popularCategoriesData ? <PopularCategories popularData={popularCategoriesData} /> : null }
            </>
        );
    }
}

export default DashboardComponent;
