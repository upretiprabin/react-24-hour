/**
 * App routes are loaded here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import routerService from "../services/_routerService";
import AppLayout from "../appLayout"
import {Redirect, Route, withRouter} from "react-router-dom";

class MainApp extends Component {

    _isMounted = false;

    state = {};

    static getDerivedStateFromProps(props,state){
        return {...state}
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
        const { match, location } = this.props;
        let routes = routerService;
        if(location.pathname === "/")
            return (<Redirect to={'/first-page'} />);
        return (
            <AppLayout>
                {routes && routes.map((route,key)=>
                    <Route key={key} path={`/${route.path}`} component={route.component} />
                )}
            </AppLayout>
        );
    }
}

export default withRouter(MainApp);
