import React from 'react';
import Img1in50 from '../Images/Data_1-in-50.png';
import WatchBanner from '../Components/WatchBanner';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExplorePsychosis() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[11].h1}</h2>

            <img src={Img1in50} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[11].number}</span><br/> {IssueInfoData[11].location} has experienced <br/><b>{IssueInfoData[11].h1}</b> in their life.
            <br/>(Source: <a href={IssueInfoData[11].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[11].source}</a>)</p>
            </div>

            <p className="infoText">{IssueInfoData[11].body} (Source: <a href={IssueInfoData[11].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[11].source}</a>)</p>
            
            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="../help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>

            <WatchBanner issue={"co-morbid mental health issues"} ep={"4"} date={"30 Dec"} link={"../../documentary/ep4"} prg={"Jess as she shares her experience managing"} />

        </div>
    );
}

export default ExplorePsychosis;