import React from 'react';
import showSS from '../Images/opening-title.jpg';

function WatchBanner(props, link, issue, ep, date) {
    return(
        <div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
                <div className="watchBanner">
                    <div className="showThumb">
                        <img src={showSS} alt="SIMH"/>
                    </div>
                    <div className="showInfo">
                        <p><span>{props.issue}</span> is featured in the documentary <span>Strangers in My Head</span> episode #{props.ep}.</p>
                        <p className="watchCTA">Launching {props.date} 2020 at Channel &#9656;&#9656;</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default WatchBanner;