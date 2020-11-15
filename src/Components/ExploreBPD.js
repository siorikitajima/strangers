import React from 'react';
import Img1in101 from '../Images/Data_1-in-101.png';
import WatchBanner from '../Components/WatchBanner';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreBPD() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[9].h1}</h2>

            <img src={Img1in101} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[9].number}</span><br/> {IssueInfoData[9].location} has experienced <br/><b>{IssueInfoData[9].h1}</b> in their life.
            <br/>(Source: <a href="https://www.nice.org.uk/guidance/cg78/chapter/Introduction" rel="noopener noreferrer" target="_blank">National Institute for Health and Care Excellence</a>)
            </p>
            </div>

            <p className="infoText">{IssueInfoData[9].body} (Source: <a href={IssueInfoData[9].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[9].source}</a>)</p>
            
            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="#/help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>

            <WatchBanner issue={"Borderline Personality Disorder"} ep={"3"} date={"23 Dec"} link={"../../documentary/ep3"} />

        </div>
    );
}

export default ExploreBPD;