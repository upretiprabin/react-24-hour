import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const getCategoryShow = (categoryTitle,filterData) =>{
    return filterData?.filter((filter)=> filter.label===categoryTitle)[0]?.show
}

const PopularCategories = ({popularData,filter}) =>{

    return (
        <div className='section-title'>
            <div>
                <p className={""}>Popular Categories</p>
            </div>
            <div className="tile-wrapper">
                {popularData && popularData.map((data,index)=>{
                    return(
                        <div key={index} className='tile'>
                            {
                                getCategoryShow(data.title,filter.filterList) &&
                                <div>
                                    <div className='tile__image'>
                                        <img src={data.image} alt={data.title} height="80" width="80" className="img-fluid" />
                                    </div>
                                    <div className='tile__footer'>
                                        <p className='tile__title'>{data.title}</p>
                                        <FontAwesomeIcon className='collectible__icon' icon={faAngleRight} />
                                    </div>
                                </div>
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PopularCategories;
