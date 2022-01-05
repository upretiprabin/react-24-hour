import React, {useState} from "react";
import {connect} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {faEdit, faFileInvoice, faFilePrescription, faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Profile = ({data}) =>{
    const hash = useLocation().hash;
    console.log(data);
    
    return (
        <div className='profile'>
            <div className='profile__header'>
                    <span className='profile__tag'>
                        DL
                    </span>
                <div className='profile__icons'>
                    <FontAwesomeIcon icon={faFileInvoice} />
                    <FontAwesomeIcon icon={faEdit} />
                </div>
            </div>
            <div className='profile__details'>
                <h3>{data.name || ""}</h3>
                <p>{data.email || ""}</p>
            </div>
            <div className="profile__tab-wrapper">
                <ul className="profile__tab-header">
                    <li className='active'>
                        <Link to={"#collectibles"}> Collectibles </Link>
                    </li>
                    <li>
                        <Link to={"#actions"}> Actions </Link>
                    </li>
                    <li>
                        <Link to={"#connectedExperiences"}> Connected Experiences </Link>
                    </li>
                </ul>
                <div className='profile__tab-content'>
                    {"#collectibles" === hash ?
                        (
                            <div id="collectibles">
                                <div className="profile__tab-heading">
                                    <h4>Collectibles <span className="profile__tab-heading-count">3</span></h4>
                                </div>
                                <div className="profile__tab-body">
                                    {JSON.stringify(data.collectibles)}
                                </div>
                            </div>
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
    );
}

export default Profile;


// // map state to props
// const mapStateToProps = ({ authUser }) => {
//     const { firstName, lastName } = authUser;
//     return { firstName, lastName };
// };

// export default connect(mapStateToProps)(Profile);