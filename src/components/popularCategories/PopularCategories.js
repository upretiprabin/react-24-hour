import React from "react";

const PopularCategories = ({popularData}) =>{
    console.log("popular",popularData)

    return (
        <div className='popular-categories'>
            <div>
                <p className={""}>Popular Categories</p>
            </div>
            <div className="d-flex justify-content-between">
                {popularData && popularData.map((data,index)=>{
                    return(
                        <div key={index} className="">
                            <div className="mr-3">
                                <img src={data.image} alt={data.title} height="80" width="80" className="img-fluid" />
                                <h5 className="mb-0">{data.title}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PopularCategories;
