import React from 'react';
import Img1in67 from '../Images/Data_1-in-67.png';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreDID() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[5].h1}</h2>

            <img src={Img1in67} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[5].number}</span><br/> {IssueInfoData[5].location} has experienced <br/><b>{IssueInfoData[5].h1}</b> in their life.
            <br/>(Source: <a href="https://www.msdmanuals.com/en-sg/home/mental-health-disorders/dissociative-disorders/dissociative-identity-disorder" rel="noopener noreferrer" target="_blank">MDS Manual</a>)
            </p>
            </div>

            <p className="infoText">{IssueInfoData[5].body} (Source: <a href={IssueInfoData[5].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[5].source}</a>)</p>

            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="../help/counselling">
            <div className="helpLink">
                Find A Help
            </div>
            </a>
        </div>
    );
}

export default ExploreDID;