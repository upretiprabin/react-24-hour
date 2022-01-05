import React from "react";
import {IndividualExperience} from "../individualExperience/individualExperience";

export const Experiences = (props) => {
    const {firstName, connectionExperiences} = props;
    return (
        <div>
            <p>{connectionExperiences.length || 0} connected experiences with {firstName}.</p>
            <div className="collectibles">
                {connectionExperiences.map((experience, index) => <IndividualExperience key={'experience'+index} {...experience} />)}
            </div>
        </div>
    );
};