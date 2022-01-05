import React from "react";

const Activities = ({activitiesData}) =>{
    console.log("activitesData",activitiesData)
    return (
        <div className='experience-activities'>
            <div>
                <p className={""}>{activitiesData?.length} activity found</p>
            </div>
            <ul className="list-unstyled mb-0">
                {activitiesData && activitiesData.map((data, index) =>{
                        return(
                            <li className="d-flex align-items-center justify-content-between p-20 border-bottom" key={index}>
                                <div className="d-flex">
                                    <div className="mr-3">
                                        <img src={data.image} alt={data.userName} height="80" width="80" className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <div className="d-flex">
                                            <span className="mx-1">{data.description}</span>
                                        </div>
                                        <div className="d-flex text-muted">
                                            <span className="mx-1">{data.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
}

export default Activities;
