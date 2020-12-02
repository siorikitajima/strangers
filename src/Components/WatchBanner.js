import React from 'react';
import showSS from '../Images/opening-title.jpg';
import {
    Link
  } from "react-router-dom";

function WatchBanner(props, link, prg, issue, ep, date) {
    return(
        <div>
         <Link to={props.link} >
                <div className="watchBanner">
                    <div className="showThumb">
                        <img src={showSS} alt="SIMH"/>
                    </div>
                    <div className="showInfo">
                        <p className="showInfoP"><span>STRANGERS IN MY HEAD</span> invites you into the life of {props.prg} <span>{props.issue}</span>.</p>
                        <p className="showInfoP watchCTA">Episode {props.ep}, Premiering {props.date} 2020 &#9656;&#9656;</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default WatchBanner;