import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

export const AccountDropdown = (props ,state) => {
    const authUser = useSelector((state) => state.authUser);
    return (<>
        <div className='accountDrop'>
            <div className='accountDrop__profile-image'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=""/>
            </div>
            <p className='accountDrop__profile-name'>{authUser.username}</p>
            <FontAwesomeIcon className='accountDrop__icon' icon={faCaretDown} />
        </div>
    </>);
};
