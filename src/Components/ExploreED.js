import React from 'react';
import Img1in200 from '../Images/Data_1-in-200.png';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreED() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[12].h1}</h2>

            <img src={Img1in200} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[12].number}</span><br/> {IssueInfoData[12].location} has experienced <br/><b>{IssueInfoData[12].h1}</b> in their life.
            <br/>(Source: <a href="https://ourworldindata.org/mental-health" rel="noopener noreferrer" target="_blank">Our World in Data</a>)</p>
            </div>

            <p className="infoText">{IssueInfoData[12].body} (Source: <a href={IssueInfoData[12].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[12].source}</a>)</p>
            
            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="../help/specialists">
            <div className="helpLink">
                Find Help
            </div>
            </a>
        </div>
    );
}

export default ExploreED;