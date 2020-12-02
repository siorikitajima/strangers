import React from 'react';
import showSS from '../Images/opening-title.jpg';
import {
    Link
  } from "react-router-dom";

function WatchBannerGeneral() {
    return(
        <div>
            <Link to={location => `../../documentary`} >
                <div className="watchBanner">
                    <div className="showThumb">
                        <img src={showSS} alt="SIMH"/>
                    </div>
                    <div className="showInfo">
                        <p className="showInfoP">Documentary Series: <span>Strangers in My Head</span> follows 4 individuals as they quietly examine and search for their identity and place in society, amidst their ceaseless strife with different mental health issues.</p>
                        <p className="showInfoP watchCTA">Watch Trailer &#9656;&#9656;</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default WatchBannerGeneral;