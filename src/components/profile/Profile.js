import React from "react";
import { Link, useLocation } from "react-router-dom";
import {faEdit, faFileInvoice} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Collectibles} from "../collectibles/Collectibles";

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
    );
}

export default Profile;
