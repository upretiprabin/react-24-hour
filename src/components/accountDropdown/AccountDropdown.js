import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTE_COLLECTIBLES } from "../profile/constant";
import userLogoImage from "../../images/userLogo.png";

export const AccountDropdown = (props ,state) => {
    const authUser = useSelector((state) => state.authUser);
    return (
    <>
        <Link to={"/profile" + ROUTE_COLLECTIBLES} className="noDecoration">
            <div className='accountDrop'>
                <div className='accountDrop__profile-image'>
                    <img src={userLogoImage} alt=""/>
                </div>
                <p className='accountDrop__profile-name'>{authUser.username}</p>
                <FontAwesomeIcon className='accountDrop__icon' icon={faCaretDown} />
            </div>
        </Link>
    </>);
};
