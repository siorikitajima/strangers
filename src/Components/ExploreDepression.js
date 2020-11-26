import React from 'react';
import Img1in16 from '../Images/Data_1-in-16.png';
import WatchBanner from '../Components/WatchBanner';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreDepression() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[0].h1}</h2>

            <img src={Img1in16} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[0].number}</span><br/> {IssueInfoData[0].location} has experienced <br/><b>{IssueInfoData[0].h1}</b> in their life.
            <br/>(Source: <a href={IssueInfoData[0].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[0].source}</a>)
            </p>
            </div>

            <p className="infoText">{IssueInfoData[0].body} (Source: <a href={IssueInfoData[0].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[0].source}</a>)</p>
            
            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="../help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>

            <WatchBanner issue={"Depression and Asperger Syndrome"} ep={"3"} date={"23 Dec"} link={"../../documentary/ep3"} prg={"Karen as she shares her experience as a caregiver to her son dealing with"} />

        </div>
    );
}

export default ExploreDepression;