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
                        <p><span>Mental health issues</span> are featured in the documentary <span>Strangers in My Head</span>.</p>
                        <p className="watchCTA">Coming Soon on 9 Dec 2020 &#9656;&#9656;</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default WatchBannerGeneral;