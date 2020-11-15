import React from 'react';
import Img1in28 from '../Images/Data_1-in-28.png';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreOCD() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[3].h1}</h2>

            <img src={Img1in28} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[3].number}</span><br/> {IssueInfoData[3].location} has experienced <br/><b>{IssueInfoData[3].h1}</b> in their life.
            <br/>(Source: <a href={IssueInfoData[3].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[3].source}</a>)</p>
            </div>

            <p className="infoText">{IssueInfoData[3].body} (Source: <a href={IssueInfoData[3].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[3].source}</a>)</p>
            
            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="#/help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>
        </div>
    );
}

export default ExploreOCD;