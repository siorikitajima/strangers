import React from 'react';
import showSS from '../Images/opening-title.jpg';
import {
    Link
  } from "react-router-dom";

function WatchBanner(props, link, issue, ep, date) {
    return(
        <div>
         <Link to={props.link} >
                <div className="watchBanner">
                    <div className="showThumb">
                        <img src={showSS} alt="SIMH"/>
                    </div>
                    <div className="showInfo">
                        <p><span>{props.issue}</span> is featured in the documentary <span>Strangers in My Head</span> episode #{props.ep}.</p>
                        <p className="watchCTA">Coming Soon on {props.date} 2020 &#9656;&#9656;</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default WatchBanner;