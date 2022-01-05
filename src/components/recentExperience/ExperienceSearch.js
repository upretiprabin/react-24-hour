import React from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Input } from 'reactstrap';

const ExperienceSearch = ({handleSearch,searchString}) =>{

    return (
        <div className='experience-search'>
            <div className="search-wrapper mb-0 position-relative">
                <Input
                    type="text"
                    name="search-users"
                    id="search"
                    className="search-input rounded-0 py-2 px-3"
                    placeholder="Search"
                    onChange={(e) => {handleSearch(e.target.value);}}
                    value={searchString}
                />
                <FontAwesomeIcon icon={faSearch} />
            </div>

        </div>
    );
}

export default ExperienceSearch;
