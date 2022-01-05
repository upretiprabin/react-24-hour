import React from "react";
import {IndividualExperience} from "../individualExperience/individualExperience";

export const Experiences = (props) => {
    const {connectionExperiences} = props;
    return (
        <div>
            <p>2 connected experiences with devon.</p>
            <div className="collectibles">
                {connectionExperiences.map((experience, index) => <IndividualExperience key={'experience'+index} {...experience} />)}
            </div>
        </div>
    );
};