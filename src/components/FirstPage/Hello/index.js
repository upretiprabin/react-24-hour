import React, {useState} from "react";
import {connect} from "react-redux";

const Hello = ({dummyData,firstName,lastName}) =>{
    return (
        <div>
            Hello {firstName} {lastName},
            <div>
                Dummy data are :
                {
                    dummyData?.map((data,index)=>{
                        return(
                            <p key={index}>{data.name}</p>
                        )
                    })
                }
            </div>
        </div>
    );
}


// map state to props
const mapStateToProps = ({ authUser }) => {
    const { firstName, lastName } = authUser;
    return { firstName, lastName };
};

export default connect(mapStateToProps)(Hello);