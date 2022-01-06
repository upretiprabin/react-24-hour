import React from "react";

const Details = ({detailData}) =>{

    return (
        <div className='experience-details'>
            {detailData &&
            <div>
                <div className='section-title'>
                    <h6>Overview</h6>
                </div>
                <div>
                    {detailData.overview}
                </div>
                <a href={detailData.url} target='_blank'>{detailData.url}</a>
            </div>
            }
        </div>
    );
}

export default Details;
