import React from 'react';
import Img1in335 from '../Images/Data_1-in-335.png';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreSchizophrenia() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[13].h1}</h2>

            <img src={Img1in335} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[13].number}</span><br/> {IssueInfoData[13].location} has experienced <br/><b>{IssueInfoData[13].h1}</b> in their life.
            <br/>(Source: <a href="https://ourworldindata.org/mental-health" rel="noopener noreferrer" target="_blank">Our World in Data</a>)
            </p>
            </div>

            <p className="infoText">{IssueInfoData[13].body} (Source: <a href={IssueInfoData[13].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[13].source}</a>)</p>
            
            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="#/help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>
        </div>
    );
}

export default ExploreSchizophrenia;