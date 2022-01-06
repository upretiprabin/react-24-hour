/**
 * App routes are loaded here
 */
import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import AppLayout from "../components/appLayout";
import routerService from "../services/_routerService";

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
        let routes = routerService;
        return (
            <AppLayout>
                {routes && routes.map((route,key)=>
                    <Route key={key} exact path={`/${route.path}`} component={route.component} />
                )}
            </AppLayout>
        );
    }
}

export default withRouter(MainApp);
