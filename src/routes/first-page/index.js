/**
 * App starts from here
 */
import React, { Component } from 'react';
import Hello from "../../components/FirstPage/Hello";
import {loadHelloComponentData} from "../../services/firstPage/firstPageService";

class FirstPage extends Component {

    _isMounted = false;

    state = {
        helloComponentData : null
    };

    static getDerivedStateFromProps(props,state){
        return {...state}
    }

    changeState(data){
        if(this._isMounted)
            this.setState(data)
    }

    loadData(){
        loadHelloComponentData(this);
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
        const {helloComponentData} = this.state;
        return (
            <Hello
                dummyData={helloComponentData}
            />
        );
    }
}

export default FirstPage;
