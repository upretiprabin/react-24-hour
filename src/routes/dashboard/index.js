import React, { Component } from 'react';
import RecentExperience from "../../components/recentExperience/RecentExperience";
import {loadRecentExperienceData,loadPopularCategoryData} from "../../services/dashboard/DashboardService";
import PopularCategories from "../../components/popularCategories/PopularCategories";
import ExperienceSearch from "../../components/recentExperience/ExperienceSearch";
import {connect} from "react-redux";
import {filterData} from "../../components/filter/Data";

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
        const {filterData} = this.props;
        return (
            <>
                <ExperienceSearch handleSearch={(searchString)=>{this.handleSearch(searchString)}}/>
                { recentExperienceData ? <RecentExperience recentData={recentExperienceData} searchString = {searchString} /> : null }
                { (!searchString && popularCategoriesData) ? <PopularCategories popularData={popularCategoriesData} filter={filterData}/> : null }
            </>
        );
    }
}
// map state to props
const mapStateToProps = ({ filter }) => {
    return { filterData : filter };
};

export default connect(mapStateToProps)(DashboardComponent);