import React from 'react';

const ProfileIcon = ({name, size}) => {
    const nameArr = name && name.length > 0 ? name.split(' ') : [];
    let nameLetters = nameArr.map((temp) => temp.length > 0 && (temp.charAt(0).toLocaleUpperCase() || ''));
    
    return (
        <span className={'profile__tag profile__tag--' + size}>
            {nameLetters.join('')}
        </span>
    );
}

export default ProfileIcon;