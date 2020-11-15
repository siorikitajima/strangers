import React from 'react';
import Img1in62 from '../Images/Data_1-in-62.png';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreAnxiety() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[2].h1}</h2>

            <img src={Img1in62} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[2].number}</span><br/> {IssueInfoData[2].location} has experienced <br/><b>{IssueInfoData[2].h1}</b> in their life.<br/>(Source: <a href={IssueInfoData[2].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[2].source}</a>)
            </p>
            </div>

            <p className="infoText">{IssueInfoData[2].body} (Source: <a href={IssueInfoData[2].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[2].source}</a>)</p>

            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="#/help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>
        </div>
    );
}

export default ExploreAnxiety;