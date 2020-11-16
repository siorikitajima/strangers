import React from 'react';
import Img1in28 from '../Images/Data_1-in-28.png';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreAA() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[4].h1}</h2>

            <img src={Img1in28} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[4].number}</span><br/> {IssueInfoData[4].location} has experienced <br/><b>{IssueInfoData[4].h1}</b> in their life.
            <br/>(Source: <a href={IssueInfoData[4].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[4].source}</a>)
            </p>
            </div>

            <p className="infoText">{IssueInfoData[4].body} (Source: <a href={IssueInfoData[4].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[4].source}</a>)</p>

            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="../help/specialists">
            <div className="helpLink">
                Find Help
            </div>
            </a>
        </div>
    );
}

export default ExploreAA;