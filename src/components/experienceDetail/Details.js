import React from "react";

const Details = ({detailData}) =>{

    return (
        <div className='experience-details'>
            {detailData &&
            <div>
                <p>Overview</p>
                <div>
                    {detailData.overview}
                </div>
                <a>{detailData.url}</a>
            </div>
            }
        </div>
    );
}

export default Details;
