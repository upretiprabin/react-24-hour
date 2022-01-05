/**
 * App starts from here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


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
        const {firstName,lastName} = this.props;

        return (
            <div>
                Hello {firstName} {lastName},
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
    const { firstName, lastName } = authUser;
    return { firstName, lastName };
};

export default connect(mapStateToProps)(MainApp);
