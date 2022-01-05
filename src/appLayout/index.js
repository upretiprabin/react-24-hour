/**
 * App starts from here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppLayout extends Component {

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

    changeState(data){
        if(this._isMounted)
            this.setState(data)
    }

    render() {
        const { children } = this.props;
        return (
            <div className={"app-wrapper"}>
                { children }
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
    const { firstName, lastName } = authUser;
    return { firstName, lastName };
};

export default connect(mapStateToProps)(AppLayout);
