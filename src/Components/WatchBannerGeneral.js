import React from 'react';
import showSS from '../Images/opening-title.jpg';

function WatchBannerGeneral() {
    return(
        <div>
        <a href="http://very.sg/" target="_blank" rel="noopener noreferrer">
                <div className="watchBanner">
                    <div className="showThumb">
                        <img src={showSS} alt="SIMH"/>
                    </div>
                    <div className="showInfo">
                        <p><span>Mental health issues</span> are featured in the documentary <span>Strangers in My Head</span>.</p>
                        <p className="watchCTA">Launching 9 Dec 2020 at Channel &#9656;&#9656;</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default WatchBannerGeneral;