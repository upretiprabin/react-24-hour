import React from "react";
import {faFilter, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Input } from 'reactstrap';
import FilterModal from "../filter/filterModal";

const ExperienceSearch = ({handleSearch,searchString}) =>{

    return (
        <div className='experience-search'>
            <div className="search-wrapper mb-0 position-relative">
                <FontAwesomeIcon icon={faSearch} />
                <Input
                    type="text"
                    name="search-users"
                    id="search"
                    className="search-input rounded-0 py-2 px-3"
                    placeholder="Search"
                    onChange={(e) => {handleSearch(e.target.value);}}
                    value={searchString}
                />
            </div>
            <FilterModal/>
        </div>
    );
}

export default ExperienceSearch;
