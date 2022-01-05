import React from "react";
import { Link, useLocation } from "react-router-dom";
import {faEdit, faFileInvoice} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Collectibles} from "../collectibles/Collectibles";
import {Actions} from "../actions/Actions";
import ProfileIcon from "./profileIcon/ProfileIcon";
import { ROUTE_ACTIONS, ROUTE_COLLECTIBLES, ROUTE_CONNECTED_EXPERIENCES } from "./constant";
import { ROUTE_ALL } from "../transaction/constant";

const Profile = ({data}) =>{
    const hash = useLocation().hash;
    
    return (
        <div className='profile'>
            <div className='profile__header'>
                <ProfileIcon name={data.name} size={'md'}/>
                <div className='profile__icons'>
                    <Link to={'/transactions'+ROUTE_ALL}><FontAwesomeIcon icon={faFileInvoice} /></Link>
                    <Link to={'#'}><FontAwesomeIcon icon={faEdit} /></Link>
                </div>
            </div>
            <div className='profile__details'>
                <h3>{data.name || ""}</h3>
                <p>{data.email || ""}</p>
            </div>
            <div className="profile__tab-wrapper">
                <ul className="profile__tab-header">
                    <li className='active'>
                        <Link to={ROUTE_COLLECTIBLES}> Collectibles </Link>
                    </li>
                    <li>
                        <Link to={ROUTE_ACTIONS}> Actions </Link>
                    </li>
                    <li>
                        <Link to={ROUTE_CONNECTED_EXPERIENCES}> Connected Experiences </Link>
                    </li>
                </ul>
                <div className='profile__tab-content'>
                    {ROUTE_COLLECTIBLES === hash || '' === hash ?
                        (
                            <Collectibles id="collectibles" {...data}/>
                        ) : null
                    }

                    {ROUTE_ACTIONS === hash ?
                        (
                            <Actions id="actions" />
                        ) : null
                    }

                    {ROUTE_CONNECTED_EXPERIENCES === hash ?
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
