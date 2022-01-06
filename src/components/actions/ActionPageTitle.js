import React from 'react';

const ActionPageTitle = ({title, icon}) => {
    return (
        <h3>
            <span>
                {icon}
            </span>
            <span>
                {title}
            </span>
        </h3>
    )
};

export default ActionPageTitle;