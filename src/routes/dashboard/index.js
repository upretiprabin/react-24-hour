import React, { Component } from 'react';
import RecentExperience from "../../components/recentExperience/RecentExperience";
import {loadRecentExperienceData,loadPopularCategoryData} from "../../services/dashboard/DashboardService";
import PopularCategories from "../../components/popularCategories/PopularCategories";
import ExperienceSearch from "../../components/recentExperience/ExperienceSearch";

class DashboardComponent extends Component {

    _isMounted = false;

    state = {
        recentExperienceData : null,
        popularCategoriesData : null,
        searchString : null
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

    handleSearch(searchString){
        this.changeState({searchString})
    }


    render() {
        const {recentExperienceData,popularCategoriesData,searchString} = this.state;
        return (
            <>
                <div className={"experience-search"}>
                    <ExperienceSearch handleSearch={(searchString)=>{this.handleSearch(searchString)}}/>
                </div>
                { recentExperienceData ? <RecentExperience recentData={recentExperienceData} searchString = {searchString} /> : null }
                { (!searchString && popularCategoriesData) ? <PopularCategories popularData={popularCategoriesData} /> : null }
            </>
        );
    }
}

export default DashboardComponent;
