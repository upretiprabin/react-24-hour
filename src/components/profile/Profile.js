import React, {useState} from "react";
import {connect} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {faEdit, faFileInvoice, faFilePrescription, faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Collectibles} from "../collectibles/Collectibles";

const Profile = ({data}) =>{
    const hash = useLocation().hash;
    console.log(data);
    
    return (
        <div>
            <div>
                <div className="profile-detail">
                    <div className="left">
                        <div className="profile-image">
                        </div>
                        <div>
                            <h3>{data.name || ""}</h3>
                            <p>{data.email || ""}</p>
                        </div>
                    </div>
                    <div className="right">
                        <span className="icon">view</span> |
                        <span className="icon"> edit</span>
                    </div>
                </div>
                <div className="profile-tab">
                    <div className="tab">
                        <Link to={"#collectibles"}> Collectibles </Link>|
                        <Link to={"#actions"}> Actions </Link>|
                        <Link to={"#connectedExperiences"}> Connected Experiences </Link>
                    </div>
                <div className='profile__tab-content'>
                    {"#collectibles" === hash ?
                        (
                            <Collectibles id="collectibles" {...data}/>
                        ) : null
                    }

                    {"#actions" === hash ?
                        (
                            <div id="actions" className="tab-content">
                                <button>Send</button>
                                <button>Receive</button>
                            </div>
                        ) : null
                    }

                        {"#connectedExperiences" === hash ? 
                            (
                                <div id="connectedExperiences" className="tab-content">
                                    {JSON.stringify(data.connectionExperiences)}
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;


// // map state to props
// const mapStateToProps = ({ authUser }) => {
//     const { firstName, lastName } = authUser;
//     return { firstName, lastName };
// };

// export default connect(mapStateToProps)(Profile);