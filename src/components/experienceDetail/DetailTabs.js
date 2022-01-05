/**
 * User Profile Page
 */
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import Activities from "./Activities";
import Details from "./Details";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class DetailTabs extends Component {

    state = {
        activeTab: 0
    };

    handleChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    handleChangeIndex = index => {
        this.setState({ activeTab: index });
    };

    render() {
        const { activeTab } = this.state;
        const detailData = this.props.detailData;
        const activitiesData = detailData.activities;
        return (
            <div className="experience-detail-tabs">
                <div className="rct-tabs">
                    <AppBar position="static">
                        <Tabs
                            value={activeTab}
                            onChange={this.handleChange}
                            variant="scrollable"
                            scrollButtons="off"
                            indicatorColor="primary"
                        >
                            <Tab
                                icon={<i className="ti-user modal-icon"/>}
                                label={"Detail"}
                            />
                            <Tab
                                className={"ml-40"}
                                icon={<i className="ti-info modal-icon"/>}
                                label={"Activities"}
                            />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        index={activeTab}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        <TabContainer>
                            <div className={"tab-modal-body"}>
                                <Details detailData={detailData} />
                            </div>
                        </TabContainer>
                        <TabContainer>
                            <div className={"tab-modal-body"}>
                                <Activities activitiesData={activitiesData} />
                            </div>
                        </TabContainer>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
}

export default DetailTabs;