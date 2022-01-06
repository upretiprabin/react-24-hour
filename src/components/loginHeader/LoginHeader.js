import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltLeft, faHome, faBell, faCog} from '@fortawesome/free-solid-svg-icons';
import {AccountDropdown} from "../accountDropdown/AccountDropdown";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const LoginHeader = () => {
    const history = useHistory();
    const onBack= () => {
        history.goBack();
    }

    return (<>
        <div className='login-header'>
            <div className='login-header__icon-wrapper'>
                <FontAwesomeIcon className="cursorPointer" icon={faLongArrowAltLeft} onClick={() => onBack()} />
                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
            </div>
            <AccountDropdown/>
            <div className='login-header__icon-wrapper'>
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faCog} />
            </div>

        </div>
    </>);
};