import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltLeft, faHome, faBell, faCog} from '@fortawesome/free-solid-svg-icons';
import {AccountDropdown} from "../accountDropdown/AccountDropdown";
import './loginHeader.scss'

export const LoginHeader = () => {
    return (<>
        <div className='login-header'>
            <div className='login-header__icon-wrapper'>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
                <FontAwesomeIcon icon={faHome} />
            </div>
            <AccountDropdown/>
            <div className='login-header__icon-wrapper'>
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faCog} />
            </div>

        </div>
    </>);
};