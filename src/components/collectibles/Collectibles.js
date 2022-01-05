import React from "react";
import {IndividualCollectibles} from "../individualCollectibles/IndividualCollectibles";

export const Collectibles = (props) => {
    const {collectibles} = props;
    return (
        <div>
            <div className="profile__tab-heading">
                <h4>Collectibles <span className="profile__tab-heading-count">3</span></h4>
            </div>
            <div className="collectibles">
                {collectibles.map((collectible, index) => <IndividualCollectibles key={'collectibles'+index} {...collectible} />)}
            </div>
        </div>
    );
};